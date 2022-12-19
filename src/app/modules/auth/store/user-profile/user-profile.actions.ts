import { createAction, props } from '@ngrx/store';

export const getMyDirectsRequestedAction = createAction(
  '[UserProfile] Get My Directs Requested'
);

export const getMyDirectsSucceededAction = createAction(
  '[UserProfile] Get My Directs Requested',
  props<{ payload: any }>()
);

export const userProfileUserProfilesFailure = createAction(
  '[UserProfile] UserProfile UserProfiles Failure',
  props<{ error: any }>()
);
