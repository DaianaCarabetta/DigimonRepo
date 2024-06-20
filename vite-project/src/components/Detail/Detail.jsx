import React, { useState, useEffect } from "react";
import { getDigimon } from "../../services/digimonService";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [digimon, setDigimon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    getDigimon(name).then((data) => {
      setDigimon(data);
    });
  }, [name]);

  return (
    <div>
      {digimon ? (
        <div>
          <h1>{digimon.name}</h1>
          <img src={digimon.images[0].href} alt={`${digimon.name}`} />
          <p>Level: {digimon.levels[0].level}</p>
          <p>Attribute: {digimon.attributes[0].attribute}</p>
          <p>Type: {digimon.types[0].type}</p>
          <p>Fields:</p>
          <ul>
            {digimon.fields.map((field) => (
              <li key={field.field}>
                <img src={`${field.image}`}></img>
                <p>{field.field}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No Digimon data available</div>
      )}
    </div>
  );
};

export default Detail;
