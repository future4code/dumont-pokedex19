import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/details">
        <button>Ir para Detalhes</button>
      </Link>
      <Link to="/pokedex">
        <button>Ir para Pokedex</button>
      </Link>
    </div>
  );
}

export default Home;
