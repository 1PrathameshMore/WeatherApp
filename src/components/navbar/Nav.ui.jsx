import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMagnifyingGlass, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ location, setLocationCity, setLocationMap }) => {
    const [searchActive, setSearchActive] = useState(false)
    const [searchText, setSearchText] = useState('')

    const handleSearchActiveChange = () => {
        setSearchActive(prevValue => {
            return !prevValue
        })
    }

    const handleSearchClick = (event) => {
        setSearchActive(prevValue => {return !prevValue})
        setLocationCity(event.target.nextSibling.children[0].value)
        setSearchText('')
    }

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleButtonSubmit = (event) => {
        event.preventDefault()
        setSearchActive(prevValue => {return !prevValue})
        setLocationCity(event.target[0].value)
        setSearchText('')
    }

    const handleLocationMapToggle = () => {
        setLocationMap(prevValue => !prevValue)
    }

    return (
        <nav className="navbar m-44">
            <div className="city">
                <FontAwesomeIcon className='city-icon' icon={faLocationArrow} onClick={handleLocationMapToggle} />
                {!searchActive && <p className="city-text">{location}</p>}
            </div>
            <div className="add">
                {!searchActive && <FontAwesomeIcon className='add-icon' icon={faPlus} onClick={handleSearchActiveChange} />}
                {searchActive && (
                    <div className="input-div">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleSearchClick} />
                        <form onSubmit={handleButtonSubmit}>
                            <input type="text" id='searchCity' placeholder="Enter City Name" value={searchText} onChange={handleSearchInputChange} />
                            <button type='submit' style={{ visibility: 'hidden' }}/>
                        </form>
                        <FontAwesomeIcon icon={faXmark} className="close-icon" onClick={handleSearchActiveChange} />
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav