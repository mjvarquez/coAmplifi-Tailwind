import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, mergeMap, Observable, switchMap } from 'rxjs';
import { AuthStoreService } from './auth-store.service';
import * as AuthActions from './auth.actions';



@Injectable()
export class AuthEffects {


  constructor(private actions$: Actions, private authStoreService: AuthStoreService) {}

  authLoginRequestedAction$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.authLoginRequestedAction),
    mergeMap((payload) =>{
      // this.authStoreService.handAuthentication(payload.payload);
      return this.authStoreService.authLogin(payload.payload).pipe(
          switchMap((response: any) => {
            console.log(response);
            return [
              // AuthActions.authLoginSucceededAction({ payload: response })
            ]
          }),
          // catchError((error: Error) => {
          //   return of(NotificationAction.notificationResponse({payload: { type: 'error', message: 'Ops, something went wrong!' }}));
          // })
        )
      }
    )
  ));

  
}
