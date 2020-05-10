import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from '../WeatherData/WeatherTemperature';
import PropTypes from 'prop-types';
import './styles.css';



const WeatherData = ({data: {temperature, wind, weatherState, humidity}}) => (
    <div className="weatherDataCont"> 
        <WeatherTemperature
             temperature={temperature} 
             weatherState={weatherState}
        />
        <WeatherExtraInfo 
            humidity={humidity}
            wind={wind}
        />
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
     }),
};

export default WeatherData