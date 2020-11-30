import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "../components/Home.js";
import Details from "../components/Details.js";
import Pokedex from "../components/Pokedex.js";
import Navbar from '../components/Navbar';

export default function Router() {
  const [listPokedex, setListPokedex] = useState([]) || [];
  const [listHome, setListHome] = useState([]) || [];

  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home
            listPokedex={listPokedex}
            setListPokedex={setListPokedex}
            listHome={listHome}
            setListHome={setListHome}
          />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex
            listHome={listHome}
            setListHome={setListHome}
            listPokedex={listPokedex}
            setListPokedex={setListPokedex}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
