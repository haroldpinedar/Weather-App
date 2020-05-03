import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from '../WeatherTemperature';
import{
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weather';


const WeatherData = () => (
    <div>
        <WeatherTemperature
             temperature={20} 
             weatherState={SNOW}
        />
        <WeatherExtraInfo 
            humidity={80}
            wind={"10 m/seg"}
        />
    </div>
);

export default WeatherData