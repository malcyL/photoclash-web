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
  CreateCompetitionError = '[Competition] Create Competition Error',
}

// Get Competitions

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

// Get Competition

export class GetCompetition implements Action {
  public readonly type = ECompetitionActions.GetCompetition;
  public payload: any;
}

export class GetCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.GetCompetitionSuccess;
  constructor(public payload: ICompetition) {
  }
}

// Create Competition

export class CreateCompetition implements Action {
  public readonly type = ECompetitionActions.CreateCompetition;
  constructor(public payload: string) {
  }
}

export class CreateCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.CreateCompetitionSuccess;
  constructor() {
  }
}

export class CreateCompetitionError implements Action {
  public readonly type = ECompetitionActions.CreateCompetitionError;
  constructor() {
  }
}

export type CompetitionActions =
  GetCompetition | GetCompetitionSuccess |
  GetCompetitions | GetCompetitionsSuccess | GetCompetitionsError |
  CreateCompetition | CreateCompetitionSuccess | CreateCompetitionError;
