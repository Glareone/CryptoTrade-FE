import { createContext } from "react";
import errorInitialState, { IErrorState } from "./error-state";
import historicalInitialState, { IHistoricalState } from "./historical-state";

export interface IGlobalState {
  historical: IHistoricalState;
  error: IErrorState;
}

export const initialGlobalState: IGlobalState = {
  historical: historicalInitialState,
  error: errorInitialState
};

const AppContext = createContext<IGlobalState | any>(initialGlobalState);

export default AppContext;
