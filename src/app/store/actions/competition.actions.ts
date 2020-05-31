import { Action } from '@ngrx/store';

import { ICompetition } from '../../models/competition.interface';

export enum ECompetitionActions {
  GetCompetitions = '[Competition] Get Competitions',
  GetCompetitionsSuccess = '[Competition] Get Competitions Success',
  GetCompetitionsError = '[Competition] Get Competitions Error',

  GetCompetition = '[Competition] Get Competition',
  GetCompetitionSuccess = '[Competition] Get Competition Success',
  GetCompetitionError = '[Competition] Get Competition Error',

  CreateCompetition = '[Competition] Create Competition',
  CreateCompetitionSuccess = '[Competition] Create Competition Success',
  CreateCompetitionError = '[Competition] Create Competition Error',

  DeleteCompetition = '[Competition] Delete Competition',
  DeleteCompetitionSuccess = '[Competition] Delete Competition Success',
  DeleteCompetitionError = '[Competition] Delete Competition Error',
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
  constructor(public payload: string) {
  }
}

export class GetCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.GetCompetitionSuccess;
  constructor(public payload: ICompetition) {
  }
}

export class GetCompetitionError implements Action {
  public readonly type = ECompetitionActions.GetCompetitionError;
  constructor() {
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

// Delete Competition

export class DeleteCompetition implements Action {
  public readonly type = ECompetitionActions.DeleteCompetition;
  constructor(public payload: string) {
  }
}

export class DeleteCompetitionSuccess implements Action {
  public readonly type = ECompetitionActions.DeleteCompetitionSuccess;
  constructor() {
  }
}

export class DeleteCompetitionError implements Action {
  public readonly type = ECompetitionActions.DeleteCompetitionError;
  constructor() {
  }
}

export type CompetitionActions =
  GetCompetition | GetCompetitionSuccess |
  GetCompetitions | GetCompetitionsSuccess | GetCompetitionsError |
  DeleteCompetition | DeleteCompetitionSuccess | DeleteCompetitionError |
  CreateCompetition | CreateCompetitionSuccess | CreateCompetitionError;
