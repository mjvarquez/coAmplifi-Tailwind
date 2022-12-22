import { ActionReducerMap } from "@ngrx/store";
import * as fromAuth from 'app/modules/auth/store/auth.reducer';
import {currentUserState} from 'app/models/auth';

export interface AppState {
  auth: currentUserState
}

export const appReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer
}