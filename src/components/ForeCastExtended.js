import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import transformForecast from './../services/transformForecast';
import './styles.css';

// const days = [
//     "Lunes",
//     "Master",
//     "Miercoles",
//     "Jueves",
//     "Viernes",
//     "Sabado",
//     "Domingo",
// ]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: "day-sunny",
//     wind: "normal"
// }

const api_key = "df6e4e63f78fc8864e4fe0b9004dcea1";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForeCastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null}
    }

    //SE EJECUTA EL COMPONENTE SOLO UNA VEZ
    
    componentDidMount () {
        //fetch or axios 
        this.updateCity(this.props.city);
    }

    //ACTUALIZA LAS PROPIEDADES DEL COMPONENTE, SE EJECUTA SIEMPRE MENOS LA PRIMERA VEZ

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city){
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())   //OBTENIENE LA INFORMACION QUE VIENE DEL SERVER
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                
                this.setState({ forecastData: forecastData });
            }
        );
    }


    renderForecastItemDays(forecastData) {
       
      return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
             weekDay={forecast.weekDay} 
             hour={forecast.hour}
             data={forecast.data}>
        </ForecastItem>) ) 
       
    }

    renderProgress = (forecastData) => {
        return <h3>"Cargando Pronostico Extendido...."</h3>;
    }

    render() {
        const { city } = this.props;
        const {forecastData} = this.state;
          return( <div>
                    <h2 className="forecast-title">Pronostico Del Clima {city}</h2> 
                    {
                         forecastData ?
                         this.renderForecastItemDays(forecastData):
                         this.renderProgress()
                     }
                 </div>
                )
            }                 
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForeCastExtended;