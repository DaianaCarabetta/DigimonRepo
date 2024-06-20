import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getDigimons } from "../../services/digimonService";

const Cards = () => {
  const [digimons, setDigimons] = useState(null);
  
  useEffect(() => {
    getDigimons().then((data) => {
      setDigimons(data);
      
    });
  }, []);
  
  return (
    <div>
      {digimons && digimons.map((d) => <Card digimon={d} key={d.name} />)}
    </div>
  );
};

export default Cards;
