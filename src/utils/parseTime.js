export const parseAstroTimes = (sunriseTime, sunsetTime) => {
    const returnValue = {};
    const forSunrise = sunriseTime.split(' ')
    if(forSunrise[1][0] == 'A') {
        returnValue.sunrise = forSunrise[0]
    } else {
        returnValue.sunrise = `${Number.parseInt(forSunrise[0].split(':')[0]) + 12}:${forSunrise[0].split(':')[1]}`
    }
    const forSunset = sunsetTime.split(' ')
    if(forSunset[1][0] == 'A') {
        returnValue.sunset = forSunset[0]
    } else {
        returnValue.sunset = `${Number.parseInt(forSunset[0].split(':')[0]) + 12}:${forSunset[0].split(':')[1]}`
    }

    return returnValue
}