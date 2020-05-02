import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';
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

class WeatherLocation extends Component {   //COMPONENTE GENEREAL DE WEATHER LOCATION

    constructor() {
        super();
        this.state = {
            city: "Manizales",
            data: data,
        };
    }


    handleUpdateClick = () => {
        fetch(api_weather).then( (resolve) =>{    //PROMISES
            return resolve.json();

        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            })
        });   
    }  

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    
    }
};

export default WeatherLocation
