import React, { useState } from 'react'

const ObejctKeyValues = () => {
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectState, setSelectedState] = useState([]);
    const countries = {
        USA: ["New York", "California"],
        INDIA: ["Tamil Nadu", "Chennai"]
      };

      const handleSelect = (e) => {
       let country = e.target.value;
       setSelectedCountry(country);
       setSelectedState(countries[country] || "");
      }
  return (<>
    <h1>Hello world</h1>
    <select value = {selectedCountry} onChange={handleSelect}>
        <option value="">select</option>
        {Object.keys(countries).map((country) => (
           <option key={country} value={country}>{country}</option>
        ))}
    </select>
    <p>{selectState? selectState.join(", "): ""}</p>
  </>  
  )
}

export default ObejctKeyValues