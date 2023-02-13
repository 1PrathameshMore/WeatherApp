import { parseDate } from './parseDate'
import { parseAstroTimes } from './parseTime'

export const getDayData = (data, activeDay) => {
    let returnObject = {
        astro_times: {},
        hero_data: {},
        details_data: {}
    }
    if (Object.keys(data).length > 0) {
        if (activeDay >= 2 && activeDay <= 4) {
            returnObject.astro_times = parseAstroTimes(data?.forecast?.forecastday[activeDay - 2].astro.sunrise, data?.forecast?.forecastday[activeDay - 2].astro.sunset)
            returnObject.hero_data.date = parseDate(data?.forecast?.forecastday[activeDay - 2]?.date).date
            returnObject.hero_data.minTemp = Math.round(data?.forecast?.forecastday[activeDay - 2].day.mintemp_c)
            returnObject.hero_data.maxTemp = Math.round(data?.forecast?.forecastday[activeDay - 2].day.maxtemp_c)
            returnObject.hero_data.temp = Math.round(data?.forecast?.forecastday[activeDay - 2].day.avgtemp_c)
        }
        if (activeDay == 2) {
            returnObject.hero_data.time = data?.location?.localtime.split(' ')[1]
            returnObject.hero_data.current_time = Number.parseInt(returnObject.hero_data.time.split(':')[0]);
            returnObject.details_data.humidity = data?.current?.humidity
            returnObject.details_data.windDir = data?.current?.wind_dir
            returnObject.details_data.windSpeed = data?.current?.wind_kph
            returnObject.details_data.rain = data?.forecast?.forecastday[0].hour[returnObject.hero_data.current_time].will_it_rain
            returnObject.details_data.snow = data?.forecast?.forecastday[0].hour[returnObject.hero_data.current_time].will_it_snow
        }
        else if(activeDay == 3 || activeDay == 4) {
            returnObject.hero_data.time = '00:00'
            returnObject.hero_data.current_time = Number.parseInt(returnObject.hero_data.time.split(':')[0]);
            returnObject.details_data.humidity = data?.forecast?.forecastday[activeDay - 2]?.day.avghumidity
            returnObject.details_data.windDir = ''
            returnObject.details_data.windSpeed = data?.forecast?.forecastday[activeDay - 2]?.day.maxwind_kph
            returnObject.details_data.rain = data?.forecast?.forecastday[0].hour[returnObject.hero_data.current_time].daily_chance_of_rain
            returnObject.details_data.snow = data?.forecast?.forecastday[0].hour[returnObject.hero_data.current_time].daily_chance_of_snow
        }
    }
    return returnObject
}