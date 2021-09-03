import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Header from '../Header/Header';
import Home from "../Home/Home";
import Sessions from "../Sessions/Sessions";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/sessoes/:idMovie" exact >
          <Sessions />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
