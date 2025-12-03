import React, { useState } from "react";
import { use } from "react";
import Country from "../country/Country";
import "./Countrys.css";

const Countrys = ({ allCountrysFech }) => {
  const allCountry = use(allCountrysFech);
  const countries = allCountry.countries;
  // console.log(countries);

  const [visitedCountry,setVisitedCountry] = useState([]);

  const visitedCountryHandler =(country)=>{
    // console.log("click the visit handler",country);
    const newVisitedCountry = [...visitedCountry,country];
    setVisitedCountry(newVisitedCountry)
  }

  const [visitedFlags, setVisitedFlags] = useState([]);

  const visitedFlagsHandler=(flags)=>{
    console.log("Click the flag button",flags);
    const newVisitedFlags = [...visitedFlags,flags];
    setVisitedFlags(newVisitedFlags)

    

  }


  return (
    <div>
        <h1>All Country:{countries.length}</h1>
        <h2>Total Country Visited:{visitedCountry.length}</h2>
       <ol>
          { visitedCountry.map(country =>  <li> key={countries.cca3.ccn3} {country.name.common}</li>)}
       </ol>

       <h2>Total Country visited flags:{visitedFlags.length}</h2>
       <div className="flags-card">
        {visitedFlags.map(flags=> <li> <img className="flag-img" src={flags} alt="" /></li>)}
       </div>
       
      <div className="card-grid">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} visitedCountryHandler={visitedCountryHandler} visitedFlagsHandler={visitedFlagsHandler}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
