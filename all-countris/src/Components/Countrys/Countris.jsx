import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countrys.css'
const Countris = ({countrisPromise}) => {
    const[visitedCountries,setvisitedCountries]=useState([]);
    const handleVisitedCountries=(country)=>{
        console.log("visitedCountries",country)
    }
    const countisData=use(countrisPromise);
    const countris=countisData.countries;
    // console.log(countris) 
    return (
        <div>
            <h1>AL Countris Hear-{countris.length}</h1>
            <h2>Total Country Visited:</h2>
           <div className='countries'> {
                countris.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countris;