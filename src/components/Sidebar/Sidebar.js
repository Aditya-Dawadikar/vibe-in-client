import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.svg';
const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="logo-container">
                <img className="logo-sm" src={logo} alt="vibe-in Inc. logo"/>
            </div>
            <ul className="ul-options">
                <li className="li-option">My PlayList</li>
                <li className="li-option">Saved Songs</li>
                <li className="li-option">Create Playlist</li>
            </ul>
        </div>
    )
}

export default Sidebar
