import { Action } from '@ngrx/store';

import { ICompetition } from '../../models/competition.interface';

export enum ECompetitionActions {
  GetCompetitions = '[Competition] Get Competitions',
  GetCompetitionsSuccess = '[Competition] Get Competitions Success',
  GetCompetition = '[Competition] Get Competition',
  GetCompetitionSuccess = '[Competition] Get Competition Success',
}

export class GetCompetitions implements Action {
  public readonly type = ECompetitionActions.GetCompetitions;
  public payload: any;
}

export class GetCompetitionsSuccess implements Action {
  public readonly type = ECompetitionActions.GetCompetitionsSuccess;
  constructor(public payload: ICompetition[]) {
console.log('HERE');
console.log('payload: ' + JSON.stringify(this.payload));
  }
}

export class GetCompetition implements Action {
  public readonly type = ECompetitionActions.GetCompetition;
  public payload: any;
}

export class GetCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.GetCompetitionSuccess;
  constructor(public payload: ICompetition) { }
}

export type CompetitionActions = GetCompetitions | GetCompetitionsSuccess | GetCompetition | GetCompetitionSuccess;
