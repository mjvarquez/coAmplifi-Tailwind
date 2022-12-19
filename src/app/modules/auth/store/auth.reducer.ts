import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  currentUser: any;
}

export const initialState: State = {
  currentUser: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.authLoginSucceededAction, (state: State, { payload }) =>
  {
    return {
      ...state,
      currentUser: payload
    }
  }),
);

export function reducer(
  state: State | undefined,
  action: Action) {
  return authReducer(state, action);
}