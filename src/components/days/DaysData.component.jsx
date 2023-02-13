import React from 'react'

const DaysData = ({ date, day, index, activeDayIndex }) => {
    if(index != activeDayIndex) {
        day = day.slice(0, 3)
    }
    return (
        <div className={`day ${index == activeDayIndex ? 'active-day': ''}`}>
            <p className={`top ${index == activeDayIndex ? 'active-day': ''}`}>{date}</p>
            <p className={`bottom ${index == activeDayIndex ? 'active-day': ''}`}>{day}</p>
        </div>
    )
}

export default DaysData