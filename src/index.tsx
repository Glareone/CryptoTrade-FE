import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AppContextProvider from "./context/AppContextProvider";
import errorReducer from "./context/reducers/error/error-reducer";
import userReducer from "./context/reducers/user/historical-reducer";
import { initialGlobalState } from "./context/store";

export const reducers = {
  user: userReducer,
  error: errorReducer
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AppContextProvider
        reducers={reducers}
        initialGlobalState={initialGlobalState}
      >
        <App />
      </AppContextProvider>
    </Router>
  </StrictMode>,
  rootElement
);
