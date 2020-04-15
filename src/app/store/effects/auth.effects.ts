import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import {
  EAuthActions,
  OAuthLogin,
  OAuthLoginSuccess,
  OAuthLoginError,
  Logout,
  LogoutSuccess,
  LogoutError,
} from '../actions/auth.actions';
import { AngularTokenService } from 'angular-token';
import { ICompetitionHttp } from '../../models/http-models/competition-http.interface';
import { selectCompetitionList } from '../selectors/competition.selectors';

import { SpinnerShow, SpinnerHide } from '../actions/spinner.actions';

type showSpinnerTypes =
  | OAuthLogin;

type showSpinnerActions =
  | EAuthActions.OAuthLogin;

type hideSpinnerTypes =
  | OAuthLoginSuccess
  | OAuthLoginError;

type hideSpinnerActions =
  | EAuthActions.OAuthLoginSuccess
  | EAuthActions.OAuthLoginError;

@Injectable()
export class AuthEffects {

  @Effect()
  oauthLogin$ = this.actions$.pipe(
    ofType<OAuthLogin>(EAuthActions.OAuthLogin),
    mergeMap((oauthLoginAction) =>
      this.angularTokenService.signInOAuth('google_oauth2').pipe(
        map(response => console.log(response)),
        catchError(error => of (new OAuthLoginError()))
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

  @Effect()
  showSpinner = this.actions$.pipe(
    // ofType<showSpinnerTypes>(...showSpinnerActions),
    ofType<showSpinnerTypes>(EAuthActions.OAuthLogin),
    mergeMap((showSpinnerAction) =>
      map(() => new SpinnerShow())
    )
  );

  @Effect()
  hideSpinner = this.actions$.pipe(
    // ofType<hideSpinnerTypes>(...hideSpinnerActions),
    ofType<hideSpinnerTypes>(EAuthActions.OAuthLoginSuccess),
    mergeMap((hideSpinnerAction) =>
      map(() => new SpinnerHide())
    )
  );

  constructor(
    private angularTokenService: AngularTokenService,
    private actions$: Actions,
    private store: Store<IAppState>,
    private router: Router
  ) {}
}

