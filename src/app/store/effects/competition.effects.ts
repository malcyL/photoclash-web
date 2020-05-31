import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, switchMap, map, mergeMap, withLatestFrom, catchError, tap } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import { ESpinnerActions, SpinnerHide } from '../actions/spinner.actions';
import { ESnackbarActions, SnackbarShow } from '../actions/snackbar.actions';

import {
  ECompetitionActions,

  GetCompetition,
  GetCompetitionSuccess,
  GetCompetitionError,

  GetCompetitions,
  GetCompetitionsSuccess,
  GetCompetitionsError,

  CreateCompetition,
  CreateCompetitionSuccess,
  CreateCompetitionError,

  DeleteCompetition,
  DeleteCompetitionSuccess,
  DeleteCompetitionError,
} from '../actions/competition.actions';
import { CompetitionService } from '../../services/competition.service';
import { ICompetition } from '../../models/competition.interface';
import { ICompetitionHttp, ICompetitionListHttp } from '../../models/http-models/competition-http.interface';
import { selectCompetitionList } from '../selectors/competition.selectors';

@Injectable()
export class CompetitionEffects {
  constructor(
    private competitionService: CompetitionService,
    private actions$: Actions,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  // Get Competition

  @Effect()
  getCompetition$ = this.actions$.pipe(
    ofType<GetCompetition>(ECompetitionActions.GetCompetition),
    map(action => action.payload),
    switchMap((id) => this.competitionService.getCompetition(id)),
    switchMap((competitionHttp: ICompetitionHttp) => of (new GetCompetitionSuccess(competitionHttp))),
    catchError((error) => {
        return of (new GetCompetitionError());
    })
  );

  @Effect()
  getCompetitionSuccess$ = this.actions$.pipe(
    ofType<GetCompetitionSuccess>(ECompetitionActions.GetCompetitionSuccess),
    switchMap(() => of (new SpinnerHide()))
  );

  @Effect()
  getCompetitionError$ = this.actions$.pipe(
    ofType<GetCompetitionError>(ECompetitionActions.GetCompetitionError),
    switchMap(() => [
      new SnackbarShow({
        message: 'Error retrieving competition!',
        action: 'Dismiss'
      }),
      new SpinnerHide(),
    ]),
  );

  // Get Competitions

  @Effect()
  getCompetitions$ = this.actions$.pipe(
    ofType<GetCompetitions>(ECompetitionActions.GetCompetitions),
    switchMap(() => this.competitionService.getCompetitions()),
    switchMap((competitionHttp: ICompetitionListHttp) => of (new GetCompetitionsSuccess(competitionHttp.competitions))),
    catchError((error) => {
        return of (new GetCompetitionsError());
    })
  );

  @Effect()
  getCompetitionsSuccess$ = this.actions$.pipe(
    ofType<GetCompetitionsSuccess>(ECompetitionActions.GetCompetitionsSuccess),
    switchMap(() => of (new SpinnerHide()))
  );

  @Effect()
  getCompetitionsError$ = this.actions$.pipe(
    ofType<GetCompetitionsError>(ECompetitionActions.GetCompetitionsError),
    switchMap(() => [
      new SnackbarShow({
        message: 'Error retrieving competitions!',
        action: 'Dismiss'
      }),
      new SpinnerHide(),
    ]),
  );

  // Create Competition

  @Effect()
  createCompettion$ = this.actions$.pipe(
    ofType<CreateCompetition>(ECompetitionActions.CreateCompetition),
    map(action => action.payload),
    switchMap((name) => this.competitionService.createCompetition(name)),
    switchMap(() => of (new CreateCompetitionSuccess())),
    catchError((error) => {
        return of (new CreateCompetitionError());
    })
  );

  @Effect()
  createCompetitionSuccess$ = this.actions$.pipe(
    ofType<CreateCompetitionSuccess>(ECompetitionActions.CreateCompetitionSuccess),
    mergeMap(() => [
      new SnackbarShow({
        message: 'Competition created successfully.',
        action: 'Dismiss'
      }),
      new GetCompetitions(),
    ]),
  );

  @Effect()
  createCompetitionError$ = this.actions$.pipe(
    ofType<CreateCompetitionError>(ECompetitionActions.CreateCompetitionError),
    switchMap(() => [
      new SnackbarShow({
        message: 'Error creating competition!',
        action: 'Dismiss'
      }),
    ]),
  );

  // Delete Competition

  @Effect()
  deleteCompetition$ = this.actions$.pipe(
    ofType<DeleteCompetition>(ECompetitionActions.DeleteCompetition),
    map(action => action.payload),
    switchMap((id) => this.competitionService.deleteCompetition(id)),
    switchMap(() => of (new DeleteCompetitionSuccess())),
    catchError((error) => {
        return of (new DeleteCompetitionError());
    })
  );

  @Effect()
  deleteCompetitionSuccess$ = this.actions$.pipe(
    ofType<DeleteCompetitionSuccess>(ECompetitionActions.DeleteCompetitionSuccess),
    switchMap(() => [
      new SnackbarShow({
        message: 'Competition deleted.',
        action: 'Dismiss'
      }),
    ]),
    tap(() => this.router.navigate(['competitions']))
  );

  @Effect()
  deleteCompetitionError$ = this.actions$.pipe(
    ofType<DeleteCompetitionError>(ECompetitionActions.DeleteCompetitionError),
    switchMap(() => [
      new SnackbarShow({
        message: 'Error deleteing competition!',
        action: 'Dismiss'
      }),
    ]),
  );

}
