import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import {
  GetCompetitionsSuccess,
  ECompetitionActions,
  GetCompetitionSuccess,
  GetCompetitions,
  GetCompetition,
  CreateCompetition,
  CreateCompetitionSuccess,
} from '../actions/competition.actions';
import { CompetitionService } from '../../services/competition.service';
import { ICompetitionHttp } from '../../models/http-models/competition-http.interface';
import { selectCompetitionList } from '../selectors/competition.selectors';

@Injectable()
export class CompetitionEffects {
  constructor(
    private competitionService: CompetitionService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getCompetition$ = this.actions$.pipe(
    ofType<GetCompetition>(ECompetitionActions.GetCompetition),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectCompetitionList))),
    switchMap(([id, competitions]) => {
      const selectedCompetition = competitions.filter(competition => competition.id === id)[0];
      return of(new GetCompetitionSuccess(selectedCompetition));
    })
  );

  @Effect()
  getCompetitions$ = this.actions$.pipe(
    ofType<GetCompetitions>(ECompetitionActions.GetCompetitions),
    switchMap(() => this.competitionService.getCompetitions()),
    switchMap((competitionHttp: ICompetitionHttp) => of (new GetCompetitionsSuccess(competitionHttp.competitions)))
  );

  @Effect()
  createCompettion$ = this.actions$.pipe(
    ofType<CreateCompetition>(ECompetitionActions.CreateCompetition),
    map(action => action.payload),
    switchMap((name) => this.competitionService.createCompetition(name)),
    switchMap(() => of (new GetCompetitions())),
  );
}
