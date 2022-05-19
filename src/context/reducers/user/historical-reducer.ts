import { Reducer } from "react";
import { IFluxAction } from "..";
import historicalActions from "./historical-actions";
import { IHistoricalState } from "../../store/historical-state";

const userReducer: Reducer<IHistoricalState, IFluxAction> = (
  state: IHistoricalState,
  action: IFluxAction
) => {
  switch (action.type) {
    case historicalActions.SET_HISTORICAL_DATA:
      return {
        ...state,
        
        historicalData: action.payload,
      }
    case historicalActions.CLEAR_HISTORICAL_DATA:
      return {
        ...state,
        historicalData: null,
      }
    default:
      return state;
  }
};

export default userReducer;
