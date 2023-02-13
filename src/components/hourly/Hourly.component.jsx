import React, { useRef, useEffect} from 'react'
import HourData from './HourData.component'
import HourIndicator from './HourIndicator.component'

const Hourly = ({ data, activeIndex, handleChange, isDay }) => {
    let content
    let indicatorsContent
    const scrollRef = useRef({})

    if(Array.isArray(data)) {
        content  = data.map((hourData, index) => {
            return (<HourData
                active={index == activeIndex ? true : false}
                time={hourData.card.time}
                temp={hourData.card.temp}
                key={hourData.id}
                ID={hourData.id}
                activeIndex={activeIndex}
                conditionCode={hourData.card.condition}
                isDay={hourData.isDay}
                handleClick={handleChange}
            />)
        }
        )
        indicatorsContent = data.map((hourData, index) => {
            return (<HourIndicator 
                active={index == activeIndex ? true : false}  
                key={hourData.id}
                id={hourData.id}
                handleClick={handleChange}
            />)
        })
    }
    else {
        content = ''
        indicatorsContent = ''
    }
    // console.log(content)
    
    const scroll = () => {
        document.getElementById('cards-container').scrollTo({
            left: activeIndex * 250,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        scroll()
    }, [activeIndex])

    return (
        <section className="hourly">
            <div className="hourly-cards-container" id='cards-container'>
                {content}
            </div>
            <div className="indicators-container">
                {indicatorsContent}
            </div>
        </section>
    )
}

export default Hourly