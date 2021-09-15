import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Header from '../Header/Header';
import Sessions from "../Sessions/Sessions";
import BuyTickets from "../BuyTickets/BuyTickets";
import Success from "../Success/Success";
import Movies from "../Movies/Movies";
import Home from "../Home/Home";

function App() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    setDados({})
  }, [])

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
          <BuyTickets dados={dados} setDados={setDados} />
        </Route>
        <Route path="/sucesso" exact >
          <Success dados={dados} setDados={setDados} />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
