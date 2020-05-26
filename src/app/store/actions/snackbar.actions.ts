import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum ESnackbarActions {
  SnackbarShow = '[Snackbar] Show Snackbar',
  SnackbarHide = '[Snackbar] Hide Snackbar',
}

export class SnackbarShow implements Action {
  public readonly type = ESnackbarActions.SnackbarShow;
  constructor( public payload: {
    message: string,
    action?: string,
    config?: MatSnackBarConfig
  }) {}
}

export class SnackbarHide implements Action {
  public readonly type = ESnackbarActions.SnackbarHide;
  constructor() {}
}

export type SnackbarActions = SnackbarShow | SnackbarHide;
