// CONECTION API OPENWEATHERMAP.ORG PARA EXTRAER LOS DATOS DEL CLIMA 

const location = "Manizales,CO"
const api_key = "df6e4e63f78fc8864e4fe0b9004dcea1";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;