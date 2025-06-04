import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect_WeatherApp = () => {
  const [city, setCity] = useState(
    () => localStorage.getItem("lastCity") || ""
  );
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //typing values will be saved into city state
  //typed values saved into another state to search in similarly 
  useEffect(() => {
      let timer;
      if(!city) {
        setLoading(false);
      }
        setLoading(true);
        timer = setTimeout(async() => {
            setLoading(false);
            try {
                const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
                const data = response.data;
                setWeather(data.results || []);
                console.log(weather);
               } catch(error) {
                setError(error.message);
               }
        }, 1000)    
        return (()=> {clearTimeout(timer);})
  },[city])
  
  return (
    <>
      <div>UseEffectWeatherApp</div>
      <input type="search" placeholder="search city" onChange={(e) => setCity(e.target.value)} value={city}/>
      {loading && <p>Loading. . .</p>}
      {error && <p>Not Data Found</p>}
      {weather?.length > 0 && (weather.map((item,index) => (
        <div key={index}>
             <p>🌍 Country: {item.country} | 🏙️ City: {item.name}</p>
        </div>
      )))}
    </>
  );
};

export default UseEffect_WeatherApp;
