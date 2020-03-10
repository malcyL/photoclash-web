import { ECompetitionActions } from '../actions/competition.actions';
import { CompetitionActions } from '../actions/competition.actions';
import { initialCompetitionState, ICompetitionState } from '../state/competition.state';

export function competitionReducers(
  state = initialCompetitionState,
  action: CompetitionActions
): ICompetitionState {
  switch (action.type) {
    case ECompetitionActions.GetCompetitionsSuccess: {
      return {
        ...state,
        competitions: action.payload
      };
    }
    case ECompetitionActions.GetCompetitionSuccess: {
      return {
        ...state,
        selectedCompetition: action.payload
      };
    }

    default:
      return state;
  }
}

