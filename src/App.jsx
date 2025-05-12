
import Searchbar from "./components/Searchbar"
function App() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "36706153ad1f8080a2e40416568f8cba";
  const fetchWeather=async(city)=>{
    const response = await fetch(`${API_URL}?q=${city}&APPID=${API_KEY}`);
    const res  = await response.json();
    console.log(res.main);
  }
  
  return (
    <>
      <h1 className="m-10 font-bold text-2xl translate-x-[45%]">Weather Now</h1>
      <Searchbar fetch={fetchWeather} ></Searchbar>
    </>
  )
}

export default App
