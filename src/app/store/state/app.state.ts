import { RouterReducerState } from '@ngrx/router-store';
import { ICompetitionState, initialCompetitionState } from './competition.state';
import { ISpinnerState, initialSpinnerState } from './spinner.state';
import { ISnackbarState, initialSnackbarState } from './snackbar.state';

export interface IAppState {
  router?: RouterReducerState;
  competitions: ICompetitionState;
  spinner: ISpinnerState;
  snackbar: ISnackbarState;
}

export const initialAppState: IAppState = {
  competitions: initialCompetitionState,
  spinner: initialSpinnerState,
  snackbar: initialSnackbarState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
