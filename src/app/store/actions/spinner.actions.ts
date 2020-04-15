import { Action } from '@ngrx/store';

export enum ESpinnerActions {
  SpinnerShow = '[Spinner] Show Spinner',
  SpinnerHide = '[Spinner] Hide Spinner',
}

export class SpinnerShow implements Action {
  public readonly type = ESpinnerActions.SpinnerShow;
  constructor() {}
}

export class SpinnerHide implements Action {
  public readonly type = ESpinnerActions.SpinnerHide;
  constructor() {}
}

export type SpinnerActions = SpinnerShow | SpinnerHide;
