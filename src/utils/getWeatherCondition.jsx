import {
    WiDaySunny,
    WiNightClear,
    WiDayCloudy,
    WiNightAltCloudy,
    WiDaySunnyOvercast,
    WiNightAltCloudyHigh,
    WiNightFog,
    WiDayFog,
    WiDayRainMix,
    WiNightAltRainMix,
    WiDaySnow,
    WiNightAltSnow,
    WiDaySleet,
    WiNightAltSleet,
    WiDayThunderstorm,
    WiNightAltThunderstorm,
    WiDaySnowWind,
    WiNightAltSnowWind,
    WiDaySnowThunderstorm,
    WiNightAltSnowThunderstorm,
    WiDayRain,
    WiNightAltRain,
    WiSnowflakeCold,
} from 'weather-icons-react'

export const getWeatherCondition = (conditionCode, isDay) => {
    if (conditionCode) {
        const data = {
            1000: {
                0: {
                    text: 'Clear',
                    icon: 0
                },
                1: {
                    text: 'Sunny',
                    icon: 1
                }
            },
            1003: {
                0: {
                    text: 'Cloudy',
                    icon: 2
                },
                1: {
                    text: 'Cloudy',
                    icon: 3
                }
            },
            1006: {
                0: {
                    text: 'Cloudy',
                    icon: 2
                },
                1: {
                    text: 'Cloudy',
                    icon: 3
                }
            },
            1009: {
                0: {
                    text: 'Overcast',
                    icon: 4
                },
                1: {
                    text: 'Overcast',
                    icon: 5
                }
            },
            1030: {
                0: {
                    text: 'Mist',
                    icon: 6
                },
                1: {
                    text: 'Mist',
                    icon: 7
                }
            },
            1063: {
                0: {
                    text: 'Patchy Rain',
                    icon: 8
                },
                1: {
                    text: 'Patchy Rain',
                    icon: 9
                }
            },
            1066: {
                0: {
                    text: 'Patchy Snow',
                    icon: 10
                },
                1: {
                    text: 'Patchy Snow',
                    icon: 11
                }
            },
            1069: {
                0: {
                    text: 'Patchy Sleet',
                    icon: 12
                },
                1: {
                    text: 'Patchy Sleet',
                    icon: 13
                }
            },
            1072: {
                0: {
                    text: 'Patchy Drizzle',
                    icon: 8
                },
                1: {
                    text: 'Patchy Drizzle',
                    icon: 9
                }
            },
            1087: {
                0: {
                    text: 'Thundery Outbreaks',
                    icon: 14
                },
                1: {
                    text: 'Thundery Outbreaks',
                    icon: 15
                }
            },
            1114: {
                0: {
                    text: 'Blowing Snow',
                    icon: 16
                },
                1: {
                    text: 'Blowing Snow',
                    icon: 17
                }
            },
            1117: {
                0: {
                    text: 'Blizzard',
                    icon: 18
                },
                1: {
                    text: 'Blizzard',
                    icon: 19
                }
            },
            1135: {
                0: {
                    text: 'Fog',
                    icon: 6
                },
                1: {
                    text: 'Fog',
                    icon: 7
                }
            },
            1147: {
                0: {
                    text: 'Fog',
                    icon: 6
                },
                1: {
                    text: 'Fog',
                    icon: 7
                }
            },
            1150: {
                0: {
                    text: 'Patchy Drizzle',
                    icon: 8
                },
                1: {
                    text: 'Patchy Drizzle',
                    icon: 9
                }
            },
            1153: {
                0: {
                    text: 'Light Drizzle',
                    icon: 8
                },
                1: {
                    text: 'Light Drizzle',
                    icon: 9
                }
            },
            1168: {
                0: {
                    text: 'Freezing Drizzle',
                    icon: 8
                },
                1: {
                    text: 'Freezing Drizzle',
                    icon: 9
                }
            },
            1171: {
                0: {
                    text: 'Heavy Drizzle',
                    icon: 8
                },
                1: {
                    text: 'Heavy Drizzle',
                    icon: 9
                }
            },
            1180: {
                0: {
                    text: 'Patchy Rain',
                    icon: 8
                },
                1: {
                    text: 'Patchy Rain',
                    icon: 9
                }
            },
            1183: {
                0: {
                    text: 'Light Rain',
                    icon: 8
                },
                1: {
                    text: 'Light Rain',
                    icon: 9
                }
            },
            1186: {
                0: {
                    text: 'Moderate Rain',
                    icon: 20
                },
                1: {
                    text: 'Moderate Rain',
                    icon: 21
                }
            },
            1189: {
                0: {
                    text: 'Moderate Rain',
                    icon: 20
                },
                1: {
                    text: 'Moderate Rain',
                    icon: 21
                }
            },
            1192: {
                0: {
                    text: 'Heavy Rain',
                    icon: 20
                },
                1: {
                    text: 'Heavy Rain',
                    icon: 21
                }
            },
            1195: {
                0: {
                    text: 'Heavy Rain',
                    icon: 20
                },
                1: {
                    text: 'Heavy Rain',
                    icon: 21
                }
            },
            1198: {
                0: {
                    text: 'Light Freezing Rain',
                    icon: 20
                },
                1: {
                    text: 'Light Freezing Rain',
                    icon: 21
                }
            },
            1201: {
                0: {
                    text: 'Freezing Rain',
                    icon: 20
                },
                1: {
                    text: 'Freezing Rain',
                    icon: 21
                }
            },
            1204: {
                0: {
                    text: 'Light Sleet',
                    icon: 12
                },
                1: {
                    text: 'Light Sleet',
                    icon: 13
                }
            },
            1207: {
                0: {
                    text: 'Heavy Sleet',
                    icon: 12
                },
                1: {
                    text: 'Heavy Sleet',
                    icon: 13
                }
            },
            1210: {
                0: {
                    text: 'Light Snow',
                    icon: 10
                },
                1: {
                    text: 'Light Snow',
                    icon: 11
                }
            },
            1213: {
                0: {
                    text: 'Light Snow',
                    icon: 10
                },
                1: {
                    text: 'Light Snow',
                    icon: 11
                }
            },
            1216: {
                0: {
                    text: 'Moderate Snow',
                    icon: 10
                },
                1: {
                    text: 'Moderate Snow',
                    icon: 11
                }
            },
            1219: {
                0: {
                    text: 'Moderate Snow',
                    icon: 10
                },
                1: {
                    text: 'Moderate Snow',
                    icon: 11
                }
            },
            1222: {
                0: {
                    text: 'Heavy Snow',
                    icon: 10
                },
                1: {
                    text: 'Heavy Snow',
                    icon: 11
                }
            },
            1225: {
                0: {
                    text: 'Heavy Snow',
                    icon: 10
                },
                1: {
                    text: 'Heavy Snow',
                    icon: 11
                }
            },
            1237: {
                0: {
                    text: 'Ice Pellets',
                    icon: 22
                },
                1: {
                    text: 'Ice Pellets',
                    icon: 22
                }
            },
            1240: {
                0: {
                    text: 'Light Rain Showers',
                    icon: 8
                },
                1: {
                    text: 'Light Rain Showers',
                    icon: 9
                }
            },
            1243: {
                0: {
                    text: 'Heavy Rain Showers',
                    icon: 20
                },
                1: {
                    text: 'Heavy Rain Showers',
                    icon: 21
                }
            },
            1246: {
                0: {
                    text: 'Heavy Rain',
                    icon: 20
                },
                1: {
                    text: 'Heavy Rain',
                    icon: 21
                }
            },
            1249: {
                0: {
                    text: 'Light Sleet Showers',
                    icon: 12
                },
                1: {
                    text: 'Light Sleet Showers',
                    icon: 13
                }
            },
            1252: {
                0: {
                    text: 'Heavy Sleet Showers',
                    icon: 12
                },
                1: {
                    text: 'Heavy Sleet Showers',
                    icon: 13
                }
            },
            1255: {
                0: {
                    text: 'Light Snow Showers',
                    icon: 10
                },
                1: {
                    text: 'Light Snow Showers',
                    icon: 11
                }
            },
            1258: {
                0: {
                    text: 'Heavy Snow Showers',
                    icon: 10
                },
                1: {
                    text: 'Heavy Snow Showers',
                    icon: 11
                }
            },
            1261: {
                0: {
                    text: 'Ice Pellets Showers',
                    icon: 22
                },
                1: {
                    text: 'Ice Pellets Showers',
                    icon: 22
                }
            },
            1264: {
                0: {
                    text: 'Heavy Ice Pellets Showers',
                    icon: 22
                },
                1: {
                    text: 'Heavy Ice Pellets Showers',
                    icon: 22
                }
            },
            1273: {
                0: {
                    text: 'Thundery Light Rain',
                    icon: 14
                },
                1: {
                    text: 'Thundery Light Rain',
                    icon: 15
                }
            },
            1276: {
                0: {
                    text: 'Thundery Heavy Rain',
                    icon: 14
                },
                1: {
                    text: 'Thundery Heavy Rain',
                    icon: 15
                }
            },
            1279: {
                0: {
                    text: 'Thundery Light Snow',
                    icon: 18
                },
                1: {
                    text: 'Thundery Light Snow',
                    icon: 19
                }
            },
            1282: {
                0: {
                    text: 'Thundery Heavy Snow',
                    icon: 18
                },
                1: {
                    text: 'Thundery Heavy Snow',
                    icon: 19
                }
            },
        }
        return data[conditionCode][isDay]
    }
    else {
        return {
            text: 'Loading',
            icon: 'Loading'
        }
    }
}

export const getWeatherIcon = (fontSize, index) => {
    if(typeof index == 'number') {
        const data = [
            (<WiNightClear style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDaySunny style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltCloudy style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDayCloudy style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltCloudyHigh style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDaySunnyOvercast style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightFog style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDayFog style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltRainMix style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDayRainMix style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltSnow style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDaySnow style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltSleet style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDaySleet style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltThunderstorm style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDayThunderstorm style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltSnowWind style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDaySnowWind style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltSnowThunderstorm style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDaySnowThunderstorm style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiNightAltRain style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiDayRain style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />),
            (<WiSnowflakeCold style={{color: '#FFFFFF', fontSize: `${fontSize}px`}} />)
        ]
        return data[index]
    }
    else {
        return (<></>)
    }
}