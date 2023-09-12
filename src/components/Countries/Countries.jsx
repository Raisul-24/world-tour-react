import { useEffect, useState } from "react"
import './Countries.css'
import Country from "../Country/Country";

export default function Countries(){
        const [countries,setCountries] =useState([]);

        const [visitedCountries,setVisitedCountrie] = useState([]);

        const [visitedFlags,setVisitedFlags] = useState([]);

        useEffect(()=>{
                fetch('https://restcountries.com/v3.1/all')
                .then(res=>res.json())
                .then(data=> setCountries(data))
        },[])

        const handleVisitedCountries= (country) =>{
                console.log('add to our visited country');
                // console.log(country);
                const newVisitedCountries = [...visitedCountries,country];
                setVisitedCountrie(newVisitedCountries);
        }

        const handleVisitedFlags = flag =>{
                // console.log("Flag Adding");
                const newVisitedFlags =[...visitedFlags,flag];
                setVisitedFlags(newVisitedFlags);
        }

        return(
                <div className="">
                        <h3>React WOrld Tour : {countries.length}</h3>
                        {/* Visited countries */}
                        <div>
                                <h5>Visited Countries: {visitedCountries.length}</h5>
                                <ul>
                                {
                                        visitedCountries.map(country =>
                                        <li key={country.cca3}>{country.name.common}</li>)
                                }
                                </ul>
                        </div>
                        {/* Flag Container */}
                        <div className="flag-container"> 
                                {
                                        visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                                }
                        </div>
                        {/* display country */}
                        <div className="country-container">
                        {
                                countries.map(country =>
                                <Country  
                                handleVisitedCountries={handleVisitedCountries}
                                handleVisitedFlags ={handleVisitedFlags}
                                key={country.cca3} 
                                country={country}></Country>)
                        }
                        </div>
                </div>
        )
}