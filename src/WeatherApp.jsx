import Search from "./Search"
import Info from "./Info"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherinfo, setweatherinfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze", 
    })

    let update= (newinfo) => {
        setweatherinfo(newinfo);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"
        }}>
            <h2>Weather App</h2>
            <Search update={update}/>
            <Info info={weatherinfo} />
        </div>
    )
}
