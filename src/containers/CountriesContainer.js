import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import CountryDetail from "../components/CountryDetail";
import CountrySelector from "../components/CountrySelect";
import FaveList from "../components/FaveList";


const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [faveCountries, setFaveCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    const addToFaveCountries = function(country){
        let newFavourites = [...faveCountries, country]
        setFaveCountries(newFavourites);
    }

    

    return (
        <div>
            <CountrySelector countries={countries} onCountryClick={onCountryClick}/>
            {selectedCountry ? <CountryDetail country={selectedCountry} countries={countries} addToFaveCountries={addToFaveCountries}/> : 
            <CountryList countries={countries} onCountryClick={onCountryClick}/>}
            <FaveList faveCountries={faveCountries}/>

        </div>
    )

//function: add to list and pass down
//give to fave_list - new component 'fave_list'

}



export default CountriesContainer;