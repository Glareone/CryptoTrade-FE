import { IHistoricalData } from "../../common/types/historical";

export interface IHistoricalState {
  historicalData?: IHistoricalData;
}

const historicalInitialState: IHistoricalState = {};

export default historicalInitialState;
