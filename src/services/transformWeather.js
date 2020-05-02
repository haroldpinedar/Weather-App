import convert from 'convert-units'; // LIBRERIA PARA CONVERTIR GRADOS KELVIN - fahrenheit a celsius
import{
    SUN,
    //WINDY,
 } from '../constants/weather';


const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));  //FUNCION QUE RECIBE TEMPERATURA EN KELVIN Y RETURNA CELSIUS
                                                                  //Number(.toFixed(2)) PARA QUE SOLO MUESTRE 2 DECIMALES 
}

const  getWeatherState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;   
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
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