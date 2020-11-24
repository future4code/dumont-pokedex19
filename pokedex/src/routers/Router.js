import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../components/Home.js"
import Details from "../components/Details.js"
import Pokedex from "../components/Pokedex.js"

export default function Router() {
  return (
  
<BrowserRouter>
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route exact path="/details">
    <Details />
  </Route>
  <Route exact path="/pokedex">
  < Pokedex/>
  </Route>
  </Switch>
  </BrowserRouter>  

  )

}
