import { Action } from '@ngrx/store';
import { SignInData } from 'angular-token';

export enum EAuthActions {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutError = '[Auth] LogoutError',
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;
  constructor(public payload: SignInData) {}
}

export class LoginSuccess implements Action {
  public readonly type = EAuthActions.LoginSuccess;
constructor(public payload: any) {}
}

export class LoginError implements Action {
  public readonly type = EAuthActions.LoginError;
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

export type AuthActions = Login | LoginSuccess | LoginError | Logout | LogoutSuccess | LogoutError;
