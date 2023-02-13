import React, { useEffect, useRef } from 'react'
import { getWeatherCondition, getWeatherIcon} from '../../utils/getWeatherCondition'

const HourData = ({time, temp, active, activeIndex, conditionCode, isDay, ID, handleClick}) => {
    const divStyle = {
        transform: 'translateX('+`-${activeIndex * 250}px`+')'
    }
    const condition = getWeatherCondition(conditionCode, isDay)
    const icon = getWeatherIcon(80 , condition?.icon)
    const onClickHandle = (event) => {
        handleClick(event.target.id)
    }

    return (
        <div className={`hourly-card ${active ? 'active-card' : ''}`} id={ID} onClick={onClickHandle}>
            <p className="hour-time">{time}</p>
            <div>
                {icon}
            </div>
            <p className="hour-temp">{temp}°C</p>
        </div>
    )
}

export default HourData