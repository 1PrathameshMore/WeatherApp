import React, { useEffect, useState } from 'react'
import AstroTimes from '../astroTimes/AstroTimes.ui'
import Condition from '../condition/Condition.ui'
import Days from '../days/Days.component'
import Hero from '../hero/Hero.ui'
import Hourly from '../hourly/Hourly.component'
import Info from '../info/Info.ui'

const Body = ({ dayData, hourlyData, handleConditionChange, handleIsDayChange, conditionCode, isDay, activeDay, handleActiveDayChange, daysAndDates }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [dataToHero, setDataToHero] = useState(dayData?.hero_data)
    const [dataToDetails, setDataToDetails] = useState(dayData?.details_data)
    const handleChange = (id) => {
        const withID = hourlyData.map((hour) => {
            if(hour.id == id) {
                return 1
            }
            return 0
        })
        setActiveIndex(withID.indexOf(1))
        // setActiveIndex(data.indexOf(id))
    }
    useEffect(() => {
        if(activeIndex == 0) {
            setDataToHero(dayData?.hero_data)
            setDataToDetails(dayData?.details_data)
        } 
        else {
            if(activeIndex != -1) {
                setDataToHero(hourlyData[activeIndex].hero)
                setDataToDetails(hourlyData[activeIndex].info)
            }
        }
        handleConditionChange(hourlyData[activeIndex]?.card?.condition, activeIndex)
        handleIsDayChange(hourlyData[activeIndex]?.isDay, activeIndex)
    }, [activeIndex, hourlyData])

    useEffect(() => {
        setActiveIndex(0)
    }, [activeDay])

    return (
        <section className="body">
            <Hero 
                date={dataToHero?.date} 
                maxTemp={dataToHero?.maxTemp} 
                minTemp={dataToHero?.minTemp} 
                temp={dataToHero?.temp}
                currentTime={dataToHero?.time}
                />
            <Condition conditionCode={conditionCode} isDay={isDay}/>
            <Info windSpeed={dataToDetails?.windSpeed} windDir={dataToDetails?.windDir} humidity={dataToDetails?.humidity} rain={dataToDetails?.rain}/>
            <AstroTimes sunrise={dayData?.astro_times?.sunrise} sunset={dayData?.astro_times?.sunset}/>
            <Hourly data={hourlyData} activeIndex={activeIndex} handleChange={handleChange} isDay={isDay} conditionCode={conditionCode}/>
            <Days daysAndDates={daysAndDates} activeDay={activeDay} handleActiveDayChange={handleActiveDayChange} />
        </section>
    )
}

export default Body