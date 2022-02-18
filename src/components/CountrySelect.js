import React from "react";

const CountrySelector = ({countries, onCountryClick}) => {

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value]
        onCountryClick(chosenCountry)
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.official}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Country List</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelector