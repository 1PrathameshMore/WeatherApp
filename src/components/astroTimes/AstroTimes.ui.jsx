import React from 'react'

const AstroTimes = ({ sunrise, sunset }) => {
    return (
        <section className="astro-times">
            <div className="astro-time start">
                <p className="text">Sunrise</p>
                <p className="time">{sunrise}</p>
            </div>
            <div className="astro-time end">
                <p className="text">Sunset</p>
                <p className="time">{sunset}</p>
            </div>
        </section>
    )
}

export default AstroTimes