import React from 'react'

const Hero = ({date, maxTemp, minTemp, temp, currentTime}) => {
    return (
        <section className="hero m-44">
            <div className="hero-date-time">
                <p className="hero-date">{date}</p>
                <p className="hero-time">{currentTime}</p>
            </div>
            <div className="hero-temp">
                <div className="var-temp">
                    <p className="temp-text">LOW</p>
                    <p className="temp-value">{minTemp}°C</p>
                </div>
                <p className="temp">{temp}°C</p>
                <div className="var-temp high">
                    <p className="temp-text">HIGH</p>
                    <p className="temp-value">{maxTemp}°C</p>
                </div>
            </div>
        </section>
    )
}

export default Hero