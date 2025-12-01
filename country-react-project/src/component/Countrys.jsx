import React from 'react';
import { use } from 'react';
import Country from '../country/ country';

const Countrys = ({allCountrysFech}) => {
    const allCountry = use(allCountrysFech); 
    const countries = allCountry.countries;
    console.log(countries)
    
    console.log(allCountry)
    return (
        <div>
            
            <h2>All Countrys : {countries.length}</h2>

            
        </div>
    );
};

export default Countrys;