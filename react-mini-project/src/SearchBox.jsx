import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    //for error
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "555dd23b867eb253126c6e313c6d7e67";

    let getWeatherInfo = async () => {
       
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
       }catch(err) {
        throw err;
       }
    };

    let handleChange = (evt) => {
      setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
       try {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
       } catch (err) {//catching the error
        setError(true);
       }
    };

    return (
        <div className = "SearchBox">
        <h3>Search for weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic" 
        label="City Name" 
        variant="outlined" 
        required
        value={city}
        onChange={handleChange}
        /> 
        <br/> <br /> 
        <Button variant="contained" type='submit'>
         Search
        </Button>
        {error && <p style={{color: "red"}}>No place exists</p>}
        </form>
        </div>
    );
} 