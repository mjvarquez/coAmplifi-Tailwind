import { Action, createReducer, on } from '@ngrx/store';
import { Employee } from 'app/models/employee';
import { UserKey } from 'app/models/user-key';
import { UserKeyExt } from 'app/models/user-key-ext';
import * as UserProfileActions from './user-profile.actions';

export interface UserProfileState {
  userKey: UserKey;
  employee: Employee;
  exemptStatus: string;
  timeclockRequired: boolean;
  loaded: boolean;
  loading: boolean;
  myDirects: UserKeyExt[];
}

export const initialState: UserProfileState = {
  userKey: null,
  employee: null,
  exemptStatus: 'Exempt',
  timeclockRequired: false,
  loaded: false,
  loading: false,
  myDirects: [],
};

export const reducer = createReducer(
  initialState,
  on(UserProfileActions.getMyDirectsSucceededAction, (state: UserProfileState, { payload }) => {
    if (payload != null && payload.length > 0) {
      localStorage.setItem('myTeamMember', JSON.stringify(payload));
      // ConstantsComponent.myTeamMember = payload;
    }

    return { ...state, myDirects: payload };
  })
);
