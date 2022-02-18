import React from "react";
import FaveListItem from "./FaveListItem";

const FaveList = ({faveCountries}) => {

    const faveCountryListItems = faveCountries.map((faveCountry, index) => {
            return <FaveListItem faveCountry={faveCountry} key={index}/>
    });

    return (
        <div>
            <ul>
                {faveCountryListItems}
            </ul>
        </div>
    ) 

};




export default FaveList
