import React from 'react'

const Locations = ({ locations, locationMap, setLocationActiveIndex }) => {

    const handleActiveLocationChange = (event) => {
        setLocationActiveIndex(event.target.id - 1000)
    }

    let content = locationMap && (
        <div className='pop-up-locations'>
            {locations.map((location, index) => {
                return <p className='locations-text' id={index + 1000} onClick={handleActiveLocationChange} key={index}>{location}</p>
            })}
        </div>
        )
    return content
}

export default Locations