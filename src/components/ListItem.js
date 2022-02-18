import React from "react";

const ListItem = ({country, onCountryClick}) => {
    
    const handleClick = function (){
        onCountryClick(country);
    }

    return <li onClick={handleClick}>{country.name.official}
        <p>Population:{country.population}</p>
        </li>
}

export default ListItem