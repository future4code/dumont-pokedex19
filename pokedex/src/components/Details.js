import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";


function Details() {
  return (
    <div>
      <Link to="/">
        <button>Ir para Home </button>
      </Link>
    </div>
  );
}

export default Details;
