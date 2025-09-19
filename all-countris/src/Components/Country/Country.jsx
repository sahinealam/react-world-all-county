import React, { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountries }) => {
    // console.log(handleVisitedCountries)
    // console.log(country.name.common)
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // bacik system
        // if(visited){
        //     setVisited(false)
        // }
        // else(
        //     setVisited(true)
        // )
        // second system
        setVisited(visited ? false:true);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Country-Name:{country.name.common}</h2>
            <h2>
                Capital-{country.
                    capital.
                    capital}
            </h2>
            <h3>Area:{country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</h3>
            <p>Population-{country.population
                .population}
            </p>
            <button onClick={handleVisited}>
                {visited ? 'visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;

/**
 * 1.inline css(style-object)
 */