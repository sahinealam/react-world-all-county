import React, { use } from 'react';
import Country from '../Country/Country';
import './Countrys.css'
const Countris = ({countrisPromise}) => {
    const countisData=use(countrisPromise);
    const countris=countisData.countries;
    // console.log(countris) 
    return (
        <div>
            <h1>AL Countris Hear-{countris.length}</h1>
           <div className='countries'> {
                countris.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countris;