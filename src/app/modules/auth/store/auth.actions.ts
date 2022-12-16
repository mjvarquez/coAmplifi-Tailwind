import { createAction, props } from '@ngrx/store';

export const authLoginRequestedAction = createAction(
  '[Auth] Auth Login Requested Action'
);

export const authLoginSucceededAction = createAction(
  '[Auth] Auth Login Succeeded Action',
  props<{ data: any }>()
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
