import { ESnackbarActions } from '../actions/snackbar.actions';
import { SnackbarActions } from '../actions/snackbar.actions';
import { initialSnackbarState, ISnackbarState } from '../state/snackbar.state';

export function snackbarReducers(
  state = initialSnackbarState,
  action: SnackbarActions
): ISnackbarState {
  switch (action.type) {
    case ESnackbarActions.SnackbarShow: {
      return {
        ...state,
        show: true
      };
    }
    case ESnackbarActions.SnackbarHide: {
      return {
        ...state,
        show: false
      };
    }

    default:
      return state;
  }
}

export const isShowing = (state: ISnackbarState) => state.show;
