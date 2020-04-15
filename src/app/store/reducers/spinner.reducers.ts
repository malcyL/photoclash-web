import { ESpinnerActions } from '../actions/spinner.actions';
import { SpinnerActions } from '../actions/spinner.actions';
import { initialSpinnerState, ISpinnerState } from '../state/spinner.state';

export function spinnerReducers(
  state = initialSpinnerState,
  action: SpinnerActions
): ISpinnerState {
  switch (action.type) {
    case ESpinnerActions.SpinnerShow: {
      return {
        ...state,
        show: true
      };
    }
    case ESpinnerActions.SpinnerHide: {
      return {
        ...state,
        show: false
      };
    }

    default:
      return state;
  }
}

export const isShowing = (state: ISpinnerState) => state.show;
