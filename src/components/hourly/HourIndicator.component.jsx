import React from 'react'

const HourIndicator = ({ active, id, handleClick }) => {
    const handleHourIndicatorClick = (event) => {
        handleClick(event.target.id)
    }

    return (
        <div className={`indicator ${active ? 'active-indicator' : ''}`} onClick={handleHourIndicatorClick} id={id}></div>    
    )
}

export default HourIndicator