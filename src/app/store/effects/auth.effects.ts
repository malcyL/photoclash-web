import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import {
  EAuthActions,
  Login,
  LoginSuccess
} from '../actions/auth.actions';
import { AngularTokenService } from 'angular-token';
import { ICompetitionHttp } from '../../models/http-models/competition-http.interface';
import { selectCompetitionList } from '../selectors/competition.selectors';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.Login),
    switchMap((loginAction) => this.angularTokenService.signIn(loginAction.payload)),
    switchMap((response: any) => of (new LoginSuccess(response)))
  );

  constructor(
    private angularTokenService: AngularTokenService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}

