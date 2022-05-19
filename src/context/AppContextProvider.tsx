import React, { useReducer } from "react";
import combineReducers, { Reducers } from "./reducers";
import AppContext, { IGlobalState } from "./store";

interface AppContextProviderProps {
  reducers: Reducers;
  children: React.ReactElement;
  initialGlobalState: IGlobalState;
}

const AppContextProvider = ({
  reducers,
  initialGlobalState,
  children
}: AppContextProviderProps): React.ReactElement => {
  const [state, dispatch] = useReducer(
    combineReducers(reducers),
    initialGlobalState
  );

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
