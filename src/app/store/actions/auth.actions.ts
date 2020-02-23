import { Action } from '@ngrx/store';
import { SignInData } from 'angular-token';

export enum EAuthActions {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;
  constructor(public payload: SignInData) {}
}

export class LoginSuccess implements Action {
  public readonly type = EAuthActions.LoginSuccess;
  // constructor(public payload: ICompetition[]) {}
constructor(public payload: any) {}
}

export class LoginError implements Action {
  public readonly type = EAuthActions.LoginError;
  // constructor(public payload: ICompetition[]) {}
constructor() {}
}

export type AuthActions = Login | LoginSuccess | LoginError;
