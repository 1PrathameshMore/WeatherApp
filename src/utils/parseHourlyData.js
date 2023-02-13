import { parseDate } from "./parseDate"

export const parseHourlyData = (hourlyTempData, locationData, currentData) => {
    const hourlyData =  hourlyTempData.map((hour, index) => {
        let data = {
            card: {},
            hero: {},
            info: {}
        }
        data.id = hour.time_epoch
        data.isDay = hour.is_day
        if(index == 0) {
            data.card.time = 'NOW'
        }
        else {
            data.card.time = hour.time.split(' ')[1]
        }
        data.card.condition = hour.condition.code
        data.card.temp = Math.round(hour.temp_c)
        data.hero.date = parseDate(hour.time.split(' ')[0]).date
        data.hero.time = hour.time.split(' ')[1]
        const temp = convertToMinMax(hour)
        data.hero.minTemp = temp.min
        data.hero.maxTemp = temp.max
        data.hero.temp = temp.temp
        data.condition = hour.condition.code
        data.info.rain = hour.will_it_rain
        data.info.snow = hour.will_it_snow
        data.info.humidity = hour.humidity
        data.info.windSpeed = hour.wind_kph
        data.info.windDir = hour.wind_dir
        return data
    })
    return hourlyData
}

export const parseHourlyDataTemp = (current_time, fullHourlyData) => {
    let hourlyData
    if(current_time >= 0 && current_time <= 23) {
        const hourlyTempData = fullHourlyData.filter((hour_data, index) => index >= current_time)
        hourlyData =  hourlyTempData.map((hour, index) => {
            let data = {
                card: {},
                hero: {},
                info: {}
            }
            data.id = hour.time_epoch
            data.isDay = hour.is_day
            if(index == 0) {
                data.card.time = 'NOW'
            }
            else {
                data.card.time = hour.time.split(' ')[1]
            }
            data.card.condition = hour.condition.code
            data.card.temp = Math.round(hour.temp_c)
            data.hero.date = parseDate(hour.time.split(' ')[0]).date
            data.hero.time = hour.time.split(' ')[1]
            const temp = convertToMinMax(hour)
            data.hero.minTemp = temp.min
            data.hero.maxTemp = temp.max
            data.hero.temp = temp.temp
            data.condition = hour.condition.code
            data.info.rain = hour.will_it_rain
            data.info.snow = hour.will_it_snow
            data.info.humidity = hour.humidity
            data.info.windSpeed = hour.wind_kph
            data.info.windDir = hour.wind_dir
            return data
        })
    }
    else {
        hourlyData = ''
    }
    return hourlyData
}

const convertToMinMax = (hour) => {
    const feelsLike = Math.round(Number.parseFloat(hour?.feelslike_c))
    const actualTemp = Math.round(Number.parseFloat(hour?.temp_c))
    return {
        min: Math.min(feelsLike, actualTemp),
        temp: actualTemp,
        max: Math.max(feelsLike, actualTemp)
    }
}