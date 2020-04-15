import { RouterReducerState } from '@ngrx/router-store';
import { ICompetitionState, initialCompetitionState } from './competition.state';
import { ISpinnerState, initialSpinnerState } from './spinner.state';

export interface IAppState {
  router?: RouterReducerState;
  competitions: ICompetitionState;
  spinner: ISpinnerState;
}

export const initialAppState: IAppState = {
  competitions: initialCompetitionState,
  spinner: initialSpinnerState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
