import { ICompetition } from '../competition.interface';

export interface ICompetitionHttp {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface ICompetitionListHttp {
  competitions: ICompetition[];
}
