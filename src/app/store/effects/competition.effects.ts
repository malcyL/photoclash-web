import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import {
  GetCompetitionsSuccess,
  ECompetitionActions,
  GetCompetitionSuccess,
  GetCompetitions,
  GetCompetition
} from '../actions/competition.actions';
import { CompetitionService } from '../services/competition.service';
import { ICompetitionHttp } from '../../http-models/competition-http.interface';
import { selectCompetitionList } from '../selectors/competition.selector';

@Injectable()
export class CompetitionEffects {
  @Effect()
  getCompetition$ = this._actions$.pipe(
    ofType<GetCompetition>(ECompetitionActions.GetCompetition),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectCompetitionList))),
    switchMap(([id, competitions]) => {
      const selectedCompetition = competitions.filter(competition => competition.id === +id)[0];
      return of(new GetCompetitionSuccess(selectedCompetition));
    })
  );

  @Effect()
  getCompetitions$ = this._actions$.pipe(
    ofType<GetCompetitions>(ECompetitionActions.GetCompetitions),
    switchMap(() => this._competitionService.getCompetitions()),
    swicthMap((competitionHttp: ICompetitionHttp) => of (new GetCompetitionsSuccess(competitionHttp.competitions)))
  );

  constructor(
    private _competitionService: CompetitionService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}

