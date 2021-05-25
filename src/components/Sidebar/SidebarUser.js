import React,{useState} from 'react'
import '../../components/Style.css'
import logo from '../../assets/logo.svg';
import {NavLink} from 'react-router-dom'

const Sidebar = (props) => {

    return (
        <div className="sideBar">
            <div className="logo-container">
                <img className="logo-sm" src={logo} alt="vibe-in Inc. logo"/>
                <div className="brand-name">Vibe-In</div>
            </div>
            <div className="search-container-sidebar">
                <input className="sidebar-search-bar" type="text" placeholder="search..."></input><button className="search-btn">Go</button>
            </div>
            <ul className="ul-options">
                <NavLink className="anchor" to="/user/home"><li className="li-option">Home</li></NavLink>
                <NavLink className="anchor" to="/user/playlists"><li className="li-option">My Playlists</li></NavLink>
                <NavLink className="anchor" to="/user/savedsongs"><li className="li-option">Saved Songs</li></NavLink>
            </ul>
        </div>
    )
}

export default Sidebar
