import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import{
   SUN,
} from '../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "20 m/seg",
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Manizales"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation
