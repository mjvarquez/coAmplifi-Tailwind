import { Injectable } from '@angular/core';
import {
  Resolve,
} from "@angular/router";
import { Store } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import * as fromApp from 'store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthResolverService {

  constructor(private store: Store<fromApp.AppState>) { }

  resolve() {
    return this.store.select('auth').subscribe(res => {
      console.log(res);
      return [];
    });
  }
}
