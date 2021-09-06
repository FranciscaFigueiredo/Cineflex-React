import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Header from '../Header/Header';
import Home from "../Home/Home";
import Sessions from "../Sessions/Sessions";
import BuyTickets from "../BuyTickets/BuyTickets";
import Success from "../Success/Success";

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
        <Route path="/assentos/:idSession" exact >
          <BuyTickets />
        </Route>
        <Route path="/sucesso" exact >
          <Success />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
