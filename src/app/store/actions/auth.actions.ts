import { Action } from '@ngrx/store';
import { SignInData } from 'angular-token';

export enum EAuthActions {
  OAuthLogin = '[Auth] OAuth Login',
  OAuthLoginSuccess = '[Auth] OAuth Login Success',
  OAuthLoginError = '[Auth] OAuth Login Error',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutError = '[Auth] LogoutError',
}

export class OAuthLogin implements Action {
  public readonly type = EAuthActions.OAuthLogin;
  constructor() {}
}

export class OAuthLoginSuccess implements Action {
  public readonly type = EAuthActions.OAuthLoginSuccess;
constructor(public payload: any) {}
}

export class OAuthLoginError implements Action {
  public readonly type = EAuthActions.OAuthLoginError;
constructor() {}
}

export class Logout implements Action {
  public readonly type = EAuthActions.Logout;
  constructor() {}
}

export class LogoutSuccess implements Action {
  public readonly type = EAuthActions.LogoutSuccess;
  constructor() {}
}

export class LogoutError implements Action {
  public readonly type = EAuthActions.LogoutError;
  constructor() {}
}

export type AuthActions =
  OAuthLogin | OAuthLoginSuccess | OAuthLoginError |
  Logout | LogoutSuccess | LogoutError;
