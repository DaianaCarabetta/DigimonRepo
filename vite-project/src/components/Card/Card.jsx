import React from "react";
import { Link } from "react-router-dom";

const Card = ({ digimon }) => {
  debugger;
  return (
    <Link to={`/detail/${digimon.name}`}>
      <div>
        <h1>{digimon.name}</h1>
        <img src={`${digimon.image}`}></img>
      </div>
    </Link>
  );
};

export default Card;
