import React from "react";
import { Route } from "react-router-dom";
import HistoricalPage from "./pages/Historical/Historical";
import MainPage from "./pages/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Route path="/historical" component={HistoricalPage} />
      <Route path="/" exact component={MainPage} />
    </div>
  );
};

export default App;
