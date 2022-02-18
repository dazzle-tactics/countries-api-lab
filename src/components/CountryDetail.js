import React from "react";

const CountryDetail = ({country, addToFaveCountries}) => {


    const handleClick = function(event){
        // console.log(event.target.value)
        // const chosenCountry = event.target.value
        
        addToFaveCountries(country)
    }

    return( 
    <>
    <p>Area: {country.area}km<sup>2</sup></p>
    <p id='flag'>{country.flag}</p>
    <button onClick={handleClick} value={country} >Add to faves</button>


    </>
    )
};


export default CountryDetail