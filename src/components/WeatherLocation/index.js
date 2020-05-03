import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlsWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';
import './styles.css';



class WeatherLocation extends Component {   //COMPONENTE GENEREAL DE WEATHER LOCATION

    //CONSTRUCTOR - ESTADO INICIAL
    constructor(props) {
        super(props);
        const{ city } = props;
        this.state = {
            city,
            data: null,
        };
        console.log("Constructos");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }


    handleUpdateClick = () => {    
        const api_weather = getUrlsWeatherByCity(this.state.city);             //ACTUALIZACION DEL ESTADO DESPPUES DE OPRIMIR BOTON ACTUALIZAR
        fetch(api_weather).then( (resolve) =>{    //TRAE TODOS LOS DATOS DE LA API WEATER
            return resolve.json();

        }).then(data => {
            console.log("Resultado del handleUpdateClick")
            const newWeather = transformWeather(data);
            console.log(newWeather);
            // debugger;
            this.setState({
                data: newWeather
            })
        });   
    }  

    render() {
        
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}></Location>
            {data ?                                          //OPERADOR TERNARIO
                <WeatherData data={data}></WeatherData>:
               <CircularProgress></CircularProgress>            //SPINNER QUE MUESTRA CARGADNO. LIBRERIA @MATERIAL UI
            }
            </div>
        );
    
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation
