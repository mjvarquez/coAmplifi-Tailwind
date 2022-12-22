import { UserKey } from "./user-key";

export interface AuthCredential{
    username: string;
    password: string;
    recaptchaToken: string;
}

export class AccessToken {
    currentTenantName: string;
    tenants: string[];
    user_name: string;
    authorities: string[];
    client_id: string;
    currentTenantId: string;
    aud: string[];
    aggregateId: string;
    defaultApp: string;
    scope: string[];
    currentUserInfo: string;
    exp: number;
    jti: string;
    applications: string[];
    // store parsed from JSON string in currentUserInfo
    currentUser: any;
    expirationDatetime: Date;
    issueDatetime: Date;
}

export class currentUserState {
    access_token: string;
    aggregateId: string;
    applications: string[];
    currentTenantId: string;
    currentTenantName: string;
    currentUserInfo: string;
    defaultApp: string;
    expires_in: number;
    jti: string;
    refresh_token: string;
    scope: string;
    tenants: string[];
    token_type: string;
}