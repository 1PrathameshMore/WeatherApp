import React from 'react'
import { getWeatherCondition, getWeatherIcon } from '../../utils/getWeatherCondition'
import {WiDaySunny} from 'weather-icons-react'

const Condition = ({ conditionCode, isDay}) => {
    const condition = getWeatherCondition(conditionCode, isDay)
    const icon = getWeatherIcon(128 , condition?.icon)
    return (
        <section className="condition m-44">
            <div className="condition-icon-container">
                {icon}
            </div>
            <p className="condition-text">{condition.text}</p>
        </section>
    )
}

export default Condition