import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AccessToken } from 'app/models/auth';
import jwt_decode from 'jwt-decode';
import * as UserProfileActions from './user-profile/user-profile.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  constructor(private http: HttpClient, private store: Store,
    private _router: Router) { }

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  myDecodedAccessToken: AccessToken = null;
  public readonly APP_coAmplifi = 'coAmplifi';
  
  authLogin(payload) {
    localStorage.removeItem('last.api.access');
    localStorage.removeItem(this.JWT_TOKEN);
    
    let httpHeaders = new HttpHeaders({
      Authorization: 'Basic bXktdHJ1c3RlZC1jbGllbnQtd2l0aC1zZWNyZXQ6c29tZXNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    if (payload.recaptchaToken)
      //else don't use it as it is disabled
      httpHeaders = httpHeaders.set('g_recaptcha_token', payload.recaptchaToken);

    let body = new HttpParams()
      .set('username', 'cvhcare:' + payload.username)
      .set('password', payload.password)
      .set('grant_type', 'password');

    let options = { headers: httpHeaders };

    const loginUrl = '/uaa/oauth/token';
    return this.http.post(loginUrl, body, options);
  }

  doLoginUser(user){
    // localStorage.setItem('currentUser', JSON.stringify(user));
    // localStorage.setItem('currentUserInfo', JSON.stringify(user.currentUserInfo));
    // this.currentUserSubject.next(user);
    this.storeTokens(user);
    this.decodeAccessToken(user.access_token); // decode access token and store it as global constant
    if (this.hasApp_coAmplifi()) {
      console.log(true);
      this._router.navigate(['signed-in-redirect']);
      // if (this.isSystemAdminOnly()) {
      //   return;
      // }

    //   // load my team users & their timecard
      // this.store.dispatch(UserProfileActions.getMyDirectsRequestedAction());
      // this.getActiveJobCount();
    }
  }

  private storeTokens(user) {
    localStorage.setItem(this.JWT_TOKEN, user.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, user.refresh_token);
  }

  getActiveJobCount() {
    const url = `/cp/workservice/v1/jobCount`;
    this.http.get<number>(url).subscribe((x) => {
      localStorage.setItem('activeJobCount', x.toString());
    });
  }

  decodeAccessToken(access_token){
    let decodedAccessToken: AccessToken = jwt_decode(access_token);
    decodedAccessToken.currentUser = JSON.parse(decodedAccessToken.currentUserInfo);
    decodedAccessToken.expirationDatetime = new Date(decodedAccessToken.exp * 1000);
    decodedAccessToken.issueDatetime = new Date();
    this.myDecodedAccessToken = decodedAccessToken;
    return decodedAccessToken;
  }

  hasApp_coAmplifi(): boolean {
    var token = this.getDecodeAccessToken();
    if (!token || token.applications.length == 0) {
      return false;
    }

    return token.applications.includes(this.APP_coAmplifi);
  }

  isSystemAdminOnly(): boolean {
    var token = this.getDecodeAccessToken();
    if (!token || token.authorities == null) {
      return false;
    }

    return token.authorities.length == 1 && token.authorities.includes('ROLE_SYSTEM_ADMIN');
  }

  getDecodeAccessToken(): AccessToken {
    if (this.myDecodedAccessToken) {
      return this.myDecodedAccessToken;
    }

    let tokenStr = localStorage.getItem(this.JWT_TOKEN);
    if (tokenStr) {
      return this.decodeAccessToken(tokenStr);
    }

    return null;
  }
}
