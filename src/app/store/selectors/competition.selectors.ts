import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICompetitionState } from '../state/competition.state';

const selectCompetitions = (state: IAppState) => state.competitions;

export const selectCompetitionList = createSelector(
  selectCompetitions,
  (state: ICompetitionState) => state.competitions
);

export const selectSelectedCompetition = createSelector(
  selectCompetitions,
  (state: ICompetitionState) => state.selectedCompetition
);
