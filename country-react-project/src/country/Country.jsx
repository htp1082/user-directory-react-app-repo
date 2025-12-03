import React, { useState } from "react";
import "./Country.css";





const Country = ({ country,visitedCountryHandler ,visitedFlagsHandler}) => {
  const [visited, setVisited] = useState(false);

    // console.log(visitedCountryHandler)
  const buttonHandler = () => {
    setVisited(true);
    // if (visited) {
    //   setVisited(false); 
    // } else {
    //   setVisited(true);
    // }

    setVisited(!visited)
    visitedCountryHandler(country);
    // visitedFlagsHandler(flags)

  };

  return (
    <div className={`card ${visited && "visited-country" }`}>
      <img src={country.flags.flags.png} alt="" />
      <h2>Country: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 390757 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={buttonHandler}>{ visited  ? " Visited":"Not Visited"}</button>
      <button onClick={()=>visitedFlagsHandler(country.flags.flags.png)}>Flag Added</button>
    </div>
  );
};

export default Country;
