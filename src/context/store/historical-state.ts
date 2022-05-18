export interface IHistoricalReply {}

export interface IHistoricalState {
  historicalReplies?: Array<IHistoricalReply>;
}

const historicalInitialState: IHistoricalState = {};

export default historicalInitialState;
