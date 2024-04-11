import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css"
import { useState } from 'react';
import { colors } from '@mui/material';

export default function Search({ update }) {
    const [city, setCity] = useState("");
    let [error,seterror]= useState(false)
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "774bd4182ebe0f313312f43f495e43e0";

    const getWeather = async () => {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const jsonResponse = await response.json();
            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            return result;
        } catch (error) {
        throw error;
        }
    };

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setCity("");
            // Reset error state to false when initiating a new search
            seterror(false);
            const newInfo = await getWeather();
            if (newInfo) {
                update(newInfo);
            } else {
                // Handle error case
                console.error("Failed to fetch weather data");
            }
        } catch (err) {
            seterror(true);
        }
    };
    

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleInputChange} />
                <br /><br />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: 'red'}}>No such place exists</p>  }
            </form>
        </div>
    );
}
