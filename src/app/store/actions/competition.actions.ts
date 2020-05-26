import { Action } from '@ngrx/store';

import { ICompetition } from '../../models/competition.interface';

export enum ECompetitionActions {
  GetCompetitions = '[Competition] Get Competitions',
  GetCompetitionsSuccess = '[Competition] Get Competitions Success',
  GetCompetitionsError = '[Competition] Get Competitions Error',

  GetCompetition = '[Competition] Get Competition',
  GetCompetitionSuccess = '[Competition] Get Competition Success',

  CreateCompetition = '[Competition] Create Competition',
  CreateCompetitionSuccess = '[Competition] Create Competition Success',
}

export class GetCompetitions implements Action {
  public readonly type = ECompetitionActions.GetCompetitions;
  public payload: any;
}

export class GetCompetitionsSuccess implements Action {
  public readonly type = ECompetitionActions.GetCompetitionsSuccess;
  constructor(public payload: ICompetition[]) {
  }
}

export class GetCompetitionsError implements Action {
  public readonly type = ECompetitionActions.GetCompetitionsError;
  constructor() {
  }
}

export class GetCompetition implements Action {
  public readonly type = ECompetitionActions.GetCompetition;
  public payload: any;
}

export class GetCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.GetCompetitionSuccess;
  constructor(public payload: ICompetition) {
    // console.log(payload);
  }
}

export class CreateCompetition implements Action {
  public readonly type = ECompetitionActions.CreateCompetition;
  constructor(public payload: string) {
  }
}

export class CreateCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.CreateCompetitionSuccess;
  constructor() {
    // console.log(payload);
  }
}

export type CompetitionActions =
  GetCompetitions | GetCompetitionsSuccess | GetCompetitionsError |
  GetCompetition | GetCompetitionSuccess |
  CreateCompetition | CreateCompetitionSuccess;
