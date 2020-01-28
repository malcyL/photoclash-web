import { RouterReducerState } from '@ngrx/router-store';
import { ICompetitionState, initialCompetitionState } from './competition.state';

export interface IAppState {
  router?: RouterReducerState;
  competitions: ICompetitionState;
}

export const initialAppState: IAppState = {
  competitions: initialCompetitionState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
