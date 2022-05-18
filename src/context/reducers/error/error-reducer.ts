import { Reducer } from "react";
import { IFluxAction } from "..";
import errorActions from "./error-actions";
import { IErrorState } from "../../store/error-state";

const errorReducer: Reducer<IErrorState, IFluxAction> = (
  state: IErrorState,
  action: IFluxAction
) => {
  switch (action.type) {
    case errorActions.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case errorActions.CLEAR_ERRORS:
      return {
        ...state,
        user: undefined
      };

    default:
      return state;
  }
};

export default errorReducer;
