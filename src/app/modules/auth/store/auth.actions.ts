import { createAction, props } from '@ngrx/store';
import { AuthCredential } from 'app/models/auth';

export const authLoginRequestedAction = createAction(
  '[Auth] Auth Login Requested Action',
  props<{ payload: AuthCredential }>()
);

export const authLoginSucceededAction = createAction(
  '[Auth] Auth Login Succeeded Action',
  props<{ payload: any }>()
);

export const authRegisterRequestedAction = createAction(
  '[Auth] Auth Register Requested Action'
);

export const authRegisterSucceededAction = createAction(
  '[Auth] Auth Register Succeeded Action',
  props<{ data: any }>()
);

export const authAuthsFailure = createAction(
  '[Auth] Auth Auths Failure',
  props<{ error: any }>()
);
