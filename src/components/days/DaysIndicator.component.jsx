import React from 'react'

const DaysIndicator = ({ handleClick, index, activeDayIndex}) => {
    const handleHourIndicatorClick = (event) => {
        handleClick(event.target.id)
    }

    return (
        <div className={`indicator ${index == activeDayIndex ? 'active-indicator' : ''}`} onClick={handleHourIndicatorClick} id={index}></div>
    )
}

export default DaysIndicator