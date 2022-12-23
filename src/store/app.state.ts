import { currentUserState } from "app/models/auth";

export interface AppState {
    auth: currentUserState
}