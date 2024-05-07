import WeatherCard from "./WeatherCard";
import { useState } from "react";
import './WeatherDetails.css'

function WeatherDetails(){
    const [weatherData, setWeatherData] = useState([
        { day: "Monday", condition: "Sunshine starts to finally break through later tomorrow, on Thursday, too.", temperature: "22°C" },
        { day: "Tuesday", condition: "Both days are mostly sunny as highs climb from the upper 30s Wednesday, which remains windy.", temperature: "24°C" },
        { day: "Wednesday", condition: "Wind chills will make the temperature feel like the 20s under mostly sunny skies.", temperature: "18°C" },
        { day: "Thursday", condition: "That gave a huge advantage to the sunny Republican prone to hugging supporters.", temperature: "27°C" },
        ])
    return(
        <div class="row">
            {weatherData.map((weather,index)=>(
            <WeatherCard 
            key={index}
            day={weather.day}
            condition={weather.condition}
            temperature={weather.temperature}
            />
                )
            )}
        </div>
        
    );
}

export default WeatherDetails;