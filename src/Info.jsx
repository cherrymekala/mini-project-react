import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function Info({info}){
    const init_url="https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const hot_url="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const rain_url="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    
    return(
        <div className="Info">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
         <p>Min Temp={info.tempMin}</p>
         <p>Max temp= {info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}