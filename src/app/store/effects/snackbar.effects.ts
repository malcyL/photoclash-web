import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import {
  ESnackbarActions,
  SnackbarShow,
  SnackbarHide,
} from '../actions/snackbar.actions';

@Injectable()
export class SnackbarEffects {

  constructor(private actions$: Actions,
              private matSnackBar: MatSnackBar) {
  }

  // @Effect()
  // getCompetition$ = this.actions$.pipe(
  //   ofType<GetCompetition>(ECompetitionActions.GetCompetition),
  //   map(action => action.payload),
  //   withLatestFrom(this.store.pipe(select(selectCompetitionList))),
  //   switchMap(([id, competitions]) => {
  //     const selectedCompetition = competitions.filter(competition => competition.id === id)[0];
  //     return of(new GetCompetitionSuccess(selectedCompetition));
  //   })
  // );

  // @Effect({
  //   dispatch: false
  // })
  // closeSnackbar: Observable<any> = this.actions.ofType(ESnackbarActions.SnackbarHide)
  //   .pipe(
  //     tap(() => this.matSnackBar.dismiss())
  //   );

  @Effect({
    dispatch: false
  })
  closeSnackbar$ = this.actions$.pipe(
    ofType(ESnackbarActions.SnackbarHide),
    tap(() => this.matSnackBar.dismiss())
  );

  @Effect()
  showSnackbar$ = this.actions$.pipe(
    ofType<SnackbarShow>(ESnackbarActions.SnackbarShow),
    map((action: SnackbarShow) => action.payload),
    tap(payload => {
      console.log('===HERE=======');
      this.matSnackBar.open(payload.message, payload.action, payload.config);
    }),
    delay(2000),
    map(() => new SnackbarHide())
  );

  // @Effect()
  // showSnackbar: Observable<any> = this.actions.ofType<SnackbarShow>(ESnackbarActions.SnackbarShow)
  //   .pipe(
  //     map((action: SnackbarShow) => action.payload),
  //     tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
  //     delay(2000),
  //     map(() => new SnackbarHide())
  //   );

}
