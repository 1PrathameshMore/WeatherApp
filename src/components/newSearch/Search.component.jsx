import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

const Search = ({handleNewCity}) => {
    const [searchText, setSearchText] = useState('')

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchClick = (event) => {
        handleNewCity(event.target.nextSibling.children[0].value)
        setSearchText('')
    }

    const handleButtonSubmit = (event) => {
        event.preventDefault()
        handleNewCity(event.target[0].value) 
        setSearchText('')
    }

    return (
        <div className='new-search'>
            <div className="input-div">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleSearchClick} style={{ color: '#FFFFFF', fontSize: '30px'}} />
                <form onSubmit={handleButtonSubmit}>
                    <input type="text" id='searchCity' placeholder="Enter City Name" value={searchText} onChange={handleSearchInputChange} />
                    <button type='submit' style={{ visibility: 'hidden' }} />
                </form>
                <FontAwesomeIcon icon={faXmark} className="close-icon" />
            </div>
        </div>
    )
}

export default Search