import React from 'react'
import DaysData from './DaysData.component'
import DaysIndicator from './DaysIndicator.component'

const Days = ({ daysAndDates, activeDay, handleActiveDayChange }) => {
    let daysContent
    let indicatorsContent
    if (Array.isArray(daysAndDates?.days)) {
        if(daysAndDates?.days.length == 5) {
            daysContent = (
                daysAndDates?.days.map((day, index) => {
                    return <DaysData activeDayIndex={activeDay} index={index} date={day?.date} day={day?.day} key={index}/>
                })
            )
            indicatorsContent = (
                daysAndDates?.days.map((day, index) => {
                    return <DaysIndicator handleClick={handleActiveDayChange} activeDayIndex={activeDay} index={index} key={index + 10}/>
                })
            )
        }
    }
    return (
        <section className='days'>
            <div className='days-container'>
                {daysContent}
            </div>
            <div className='indicators-container'>
                {indicatorsContent}
            </div>
        </section>
    )
}

export default Days