import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ISpinnerState } from '../state/spinner.state';

const selectSpinner = (state: IAppState) => state.spinner;

export const isSpinnerShowing = createSelector(
  selectSpinner,
  (state: ISpinnerState) => state.show
);
