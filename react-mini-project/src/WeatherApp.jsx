import {useState} from "react";
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",//initializing SV
        temp: 24.84,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather:"haze"
    });

    let updateInfo = (newInfo) => {//info from searchbox
        setWeatherInfo(newInfo);//re-rendering//pass this fun to SearchBox as prop
    }

    return (
       <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
       </div>
    );
}