import { Reducer } from "react";
import { IErrorState } from "../store/error-state";
import { IHistoricalState } from "../store/historical-state";

export type Reducers = {
  [propName: string]:
    | Reducer<IHistoricalState, IFluxAction>
    | Reducer<IErrorState, IFluxAction>;
};

export interface IState {
  [key: string]: any;
}

export type IFluxAction = {
  type: string;
  payload?: any;
};

const combineReducers = (slices: Reducers) => (
  prevState: IState,
  action: IFluxAction
): IState =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action)
    }),
    prevState
  );

export default combineReducers;
