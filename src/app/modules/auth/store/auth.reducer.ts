import { Action, createReducer, on } from '@ngrx/store';
import { currentUserState } from 'app/models/auth';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export const initialState: currentUserState = {
  access_token: '',
  aggregateId: '',
  applications: [],
  currentTenantId: '',
  currentTenantName: '',
  currentUserInfo: '',
  defaultApp: '',
  expires_in: 0,
  jti: '',
  refresh_token: '',
  scope: '',
  tenants: [],
  token_type: ''
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.authLoginSucceededAction, (state: currentUserState, { payload }) =>
  {
    console.log(payload);
    return {
      ...state,
      ...payload
    }
  }),
);

export function reducer(
  state: currentUserState | undefined,
  action: Action) {
  return authReducer(state, action);
}