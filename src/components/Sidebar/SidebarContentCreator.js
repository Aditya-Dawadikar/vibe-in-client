import React,{useState} from 'react'
import '../../components/Style.css'
import logo from '../../assets/logo.svg';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {
    let forms=["uploadTrack","createAlbum"]
    const [modalShow,modalShowSetter]=useState(false);
    const [form,formSetter] = useState();

    const modalToggle=(e)=>{
        modalShowSetter(true);
    }

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
                <NavLink className="anchor" to="/contentcreator/home"><li className="li-option">Home</li></NavLink>
                <NavLink className="anchor" to="/contentcreator/mytracks"><li className="li-option">My Tracks</li></NavLink>
                <NavLink className="anchor" to="/contentcreator/myalbums"><li className="li-option">My Albums</li></NavLink>
                <NavLink className="anchor" to="/contentcreator/createalbum"><li className="li-option">Create Album</li></NavLink>
                <NavLink className="anchor" to="/contentcreator/uploadtrack"><li className="li-option">Upload Track</li></NavLink>
            </ul>
        </div>
    )
}

export default Sidebar
