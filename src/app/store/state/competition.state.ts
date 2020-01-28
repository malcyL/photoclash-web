import { ICompetition } from '../../models/competition.interface';

export interface ICompetitionState {
  competitions: ICompetition[];
  selectedCompetition: ICompetition;
}

export const initialCompetitionState: ICompetitionState = {
  competitions: null,
  selectedCompetition: null,
};
