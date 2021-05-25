import React,{useState,useEffect} from 'react'
import '../Style.css'
import PlayGreen from '../../assets/player/play-green.png'
import {Link} from 'react-router-dom'
import DropDown from '../DropDown/DropDown'

const AlbumCard = (props) => {
    let album=props.album;
    let currentUrl = window.location.pathname
    let token= currentUrl.split('/')[1]
    let albumUrl="/"+token+"/viewalbum/"+album.id

    return (
            <div className="album-card-container">
                <DropDown mode={props.mode}/>
                <Link to={albumUrl} className="anchor">
                    <div className="album-avatar"></div>
                </Link>           
                <div className="album-info">
                    {/* <Link to={albumUrl} className="anchor"> */}
                        <div className="album-title">{album.title}</div>
                        <div className="album-credits">{album.credits}</div>
                    {/* </Link>  */}
                </div>
                <img className="album-play-btn" src={PlayGreen} alt=""/>
            </div>            
    )
}

export default AlbumCard
