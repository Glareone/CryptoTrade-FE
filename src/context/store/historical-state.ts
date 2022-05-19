export interface IHistoricalReply {}

export interface IHistoricalState {
  historicalData?: IHistoricalReply;
}

const historicalInitialState: IHistoricalState = {};

export default historicalInitialState;
