import axios from "axios";

export const getWeatherData = async (city) => {
    const responce = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&days=3&aqi=yes&alerts=no`)
    return responce.data
}