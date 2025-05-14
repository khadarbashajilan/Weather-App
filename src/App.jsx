import { useState } from "react";
import Info from "./components/Info";
import Searchbar from "./components/Searchbar"

function App() {
  let [data, setdata] = useState({name: null, temp : null, min_temp: null, max_temp: null, feels: null, humidity: null, icon:null});
  let [error, seterror] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "36706153ad1f8080a2e40416568f8cba";
  const fetchWeather=async(city)=>{
    try{
      const response = await fetch(`${API_URL}?q=${city}&APPID=${API_KEY}&units=metric`);
      console.log(response);
       if (!response.ok) {
         seterror(response.statusText);
         throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        seterror("");
        const res  = await response.json();
          setdata(pre=>({
            ...pre,
            name: res.name,
            temp: res.main.temp,
            min_temp: res.main.temp_min,
            max_temp: res.main.temp_max,
            humidity : res.main.humidity,
            feels: res.weather[0].description,
            icon: res.main.humidity < 30 ? '☀️': 
                    res.main.humidity < 60 ? '⛅': 
                    res.main.humidity < 80 ? '🌧️':'🌁',
          }));
        }catch(e){
      console.error(e);
      console.log(error);
    }
  }
  return (
    <>
      <h1>Weather Now</h1>
      <Searchbar fetch={fetchWeather} ></Searchbar>
      {(data.name != null && (error=== "")) ? <Info weatherdata={data} />:<p className='error'> {error}</p>}
    </>
  )
}

export default App
