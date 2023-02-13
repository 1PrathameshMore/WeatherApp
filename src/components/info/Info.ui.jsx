import React from 'react'

const Info = ({ windSpeed, windDir, humidity, rain}) => {
    return (
        <section className="info">
            <p>Rain: {rain}%</p>
            <p className="info-text">Humidity: {humidity}%</p>
            <p>Wind: {windDir} {windSpeed}kmph</p>
        </section>
    )
}

export default Info