import React from "react";
import ListItem from "./ListItem";

const CountryList = ({countries, onCountryClick}) => {
    
    const countryListItems = countries.map((country, index) => {
            return <ListItem country={country} key={index} onCountryClick={onCountryClick}/>
    });

    return (
        <div>
            <ul>
                {countryListItems}
            </ul>
        </div>
    ) 

};


export default CountryList;