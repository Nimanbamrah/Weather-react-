import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    //Creating InfoBox separately
    const INIT_URL = 
    "https://images.unsplash.com/photo-1661487008107-f5ae495a9024?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";//can make separate files for such

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://media.istockphoto.com/id/673055452/photo/girl-going-in-for-sport-outside-in-cold-weather.webp?b=1&s=170667a&w=0&k=20&c=9qI3HsDO5ZESlza_UvBKbayfC2Fv27gONTYPfs-ZKrM=";
    const RAIN_URL = "https://media.istockphoto.com/id/968914210/photo/on-our-way-through-the-rain-we-go.webp?b=1&s=170667a&w=0&k=20&c=Di8OzLGKvqr5LwRKHsZyTlw_8zOR9RpbmbiCMP3QSvA=";

    //Delete info obj, any info will come in form of prop
    // let info = {//no city info here->SearchBox
    //     city: "Delhi",
    //     temp: 24.84,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather:"haze"
    // };
    
    return (
        <div className="InfoBox">
            <h3>Weather Info - {info.weather}</h3>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image= {info.humidity > 80 
                    ? RAIN_URL 
                    : info.temp > 15 
                    ? HOT_URL 
                    : COLD_URL 
                }
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 80 
                    ? <ThunderstormIcon/>
                    : info.temp > 15 
                    ? <WbSunnyIcon/>  
                    : <AcUnitIcon/> 
                }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
               <p>Temperature= {info.temp}&deg;C</p>
               <p>Humidity = {info.humidity}&deg;C</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
            </Typography>
            </CardContent>
        </Card>
        </div>
        </div>
    );
}