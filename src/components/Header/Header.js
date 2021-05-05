import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div  className="header">
            <form id="form" className="search-bar-container" onSubmit={(event)=>{event.preventDefault()}} role="search">
                <input className="search" type="search" placeholder="Search..." autoFocus required />
                <button className="submit-btn" type="submit">Go</button>    
            </form>
        </div>
    )
}

export default Header
