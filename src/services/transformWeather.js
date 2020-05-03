import convert from 'convert-units'; // LIBRERIA PARA CONVERTIR GRADOS KELVIN - fahrenheit a celsius
import{
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,   
 } from '../constants/weather';


const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));  //FUNCION QUE RECIBE TEMPERATURA EN KELVIN Y RETURNA CELSIUS
                                                                  //Number(.toFixed(2)) PARA QUE SOLO MUESTRE 2 DECIMALES 
}

const  getWeatherState = weather => {
    const { id } = weather

    if(id < 300) {
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE;
    }else if( id <600){
        return RAIN;
    }else if(id < 700){
        return SNOW;
    }else if(id === 800){
        return SUN;
    }else{
        return CLOUD;
    }
        
    
    
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;   
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    console.log(weather_data.weather)
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;