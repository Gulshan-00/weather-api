import { useEffect, useState } from "react";
import Assets from "./Assets/clouds.jpg";
import sun_png from "./Assets/sun.png";
import { API_KEY } from "./utils/Constants";

const App = () => {
  const [city, setCity] = useState("Mandi");
  const [weatherData, setWeatherData] = useState(null);
  // console.log("body rendering");
  // console.log(city);

  const currentDate = new Date();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "july",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  const fetchWeatherData = async () => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const response = await data.json();
      console.log(response);
      setWeatherData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  },[]);

  const handleSubmit=(e)=>{
     e.preventDefault();
     fetchWeatherData();
  }


  const displayWeatherIcon=(main)=>{
        switch(main){
          case "Clouds":
            return require("./Assets/thunder.png")
           case "Rain":
             return require("./Assets/rain_with_cloud.png")
           case "Mist":
              return require("./Assets/Tornado.png");
           case "Haze":
              return require("./Assets/sun.png");
          case "Clear":
                return require("./Assets/sun.png");   
           default:
             return null;         
        }
  }

  return (
    <div className="w-screen h-full fixed flex justify-center items-center bg-[#2e89ba] ">
      <div className="absolute">
        <img
          className=" translate-y-56 md:translate-y-0 hover:-translate-y-10 hover:duration-500 duration-500"
          src={Assets}
          alt="img"
        />
      </div>

    { weatherData && ( <>
      <div className="bottom-28 gap-3 md:p-8 p-1 rounded-xl m-4 border border-black border-opacity-10 absolute flex justify-center items-center flex-col md:hover:shadow-2xl shadow-lg">
        <h2 className="text-lg">
          {month}, {date} {year}
        </h2>
        <h1 className="font-bold text-3xl">{weatherData?.name}, {weatherData?.sys?.country}</h1>

        <img width="200px" src={displayWeatherIcon(weatherData?.weather[0]?.main)} alt="img" />

        <h1 className="font-extrabold text-4xl">{Math.round(weatherData?.main?.temp/10)} º</h1>
        <h3 className="font-bold">{weatherData?.weather[0]?.main}</h3>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="md:text-xl md:px-7  bg-gray-300 p-2 font-medium rounded-full"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button className="border border-black rounded-full p-2 m-4 mx-20 text-xl hover:bg-black hover:text-white">
            Go
          </button>
        </form>
      </div> 
      </>)
    } 

    </div>
  );
};

export default App;
