import { ActionReducerMap } from "@ngrx/store";
import * as fromAuth from 'app/modules/auth/store/auth.reducer';
import { AppState } from "./app.state";

export const appReducer: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer
}