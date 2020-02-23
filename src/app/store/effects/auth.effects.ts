import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import {
  EAuthActions,
  Login,
  LoginSuccess,
  LoginError,
  Logout,
  LogoutSuccess,
  LogoutError,
} from '../actions/auth.actions';
import { AngularTokenService } from 'angular-token';
import { ICompetitionHttp } from '../../models/http-models/competition-http.interface';
import { selectCompetitionList } from '../selectors/competition.selectors';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.Login),
    mergeMap((loginAction) =>
      this.angularTokenService.signIn(loginAction.payload).pipe(
        map(response => new LoginSuccess(response)),
        tap(() => this.router.navigateByUrl(localStorage.getItem('redirectTo'))),
        catchError(error => of (new LoginError()))
      )
    )
  );

  @Effect()
  logout = this.actions$.pipe(
    ofType<Logout>(EAuthActions.Logout),
    mergeMap((logoutAction) =>
      this.angularTokenService.signOut().pipe(
        map(response => new LogoutSuccess()),
        tap(() => this.router.navigate(['/login'])),
        catchError(error => of (new LogoutError()))
      )
    )
  );

  constructor(
    private angularTokenService: AngularTokenService,
    private actions$: Actions,
    private store: Store<IAppState>,
    private router: Router
  ) {}
}

