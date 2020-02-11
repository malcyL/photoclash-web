import { Action } from '@ngrx/store';
import { SignInData } from 'angular-token';

export enum EAuthActions {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
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

export type AuthActions = Login | LoginSuccess;
