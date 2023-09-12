import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
        // console.log(country)
        const {name,flags,population,area,cca3} = country;


        const [visited,setVisited] =useState(false);
        const handleVisited =() =>{
                setVisited(true);
        }
        // console.log(handleVisitedCountries);
        // const passWithParam =() =>{
        //         handleVisitedCountries(country);
        // }

        return (
                // <div className={`country ${visited && 'visited'}`}>
                <div className={`country ${visited ? 'visited': 'not-visited'}`}>
                <h3 style={{color: visited? 'purple':'Green'}}>Name:{name.common}</h3>
                        <img src={flags.png} alt="" />
                        <p>Population: {population}</p>
                        <p>Area: {area}</p>
                        <p><small>Code: {cca3}</small></p>
                        {/* <button onClick={passWithParam}>Mark as Visited</button><br /><br /> */}
                        <button onClick={() =>handleVisitedCountries(country)}>Mark as Visited</button><br /><br />


                        <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flag</button><br /><br />
                        
                        
                        <button onClick={handleVisited}>{visited? "Visited" : "Going"}</button>
                        {visited ?  "I've visited this country" : "I want to visit"}
                        
                </div>
        );
};

export default Country;