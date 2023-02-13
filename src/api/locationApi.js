import axios from "axios";

export const getLocationCoOrds = async (city) => {
    try {
        const responce = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_LOCATION_API_KEY}`)
        return responce.data
    }catch(error){
        console.log(error);
    }
}

export const getLocationFromCoOrds = async (lat, lon) => {
    try {
        const responce = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${import.meta.env.VITE_LOCATION_API_KEY}`)
        return responce.data
    }catch(error) {
        console.log(error)
    }
}