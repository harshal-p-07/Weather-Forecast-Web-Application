import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';



export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=1024x1024&w=is&k=20&c=6D4nOCZt39KSqx0-nDyxSj6n8JFrSI5cSCDUUt4o17w=";

    return(
        <div className="InfoBox">
            <h1>WeatherInfo-{info.weather}</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                
                <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 ? RAIN_URL :info.temp>15?HOT_URL :COLD_URL}
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">{info.city}{info.humidity>80 ? <ThunderstormIcon/> :info.temp>15?<SunnyIcon/> :<AcUnitIcon/>}

                </Typography>
                <Typography variant="body2" color="textSecondary" component={"span"}>
                   <p>Temperature = {info.temp}&deg;C</p>
                   <p>Humidity = {info.humidity}&deg;C</p>
                   <p>Min Temp = {info.tempMin}&deg;C</p>
                   <p>Max Temp = {info.tempMax}&deg;C</p>
                   <p>The Weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>

                </Typography>
                </CardContent>
               
            </Card>
            </div>
        </div>    
        
    )


}    
    