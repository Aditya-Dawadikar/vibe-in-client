import React,{useState} from 'react'
// import './AlbumCard.css'
import '../Style.css'
import PlayGreen from '../../assets/player/play-green.png'
import HeartGreen from '../../assets/heart-green.png'
import HeartBlack from '../../assets/heart-black.png'
import {BrowserRouter as Router,Link} from 'react-router-dom'

const AlbumCard = (props) => {
    const [like,likeSetter]= useState(false)
    const toggleLike=()=>{
        likeSetter(!like)
    }

    
    let album=props.album;
    let currentUrl = window.location.pathname
    let token= currentUrl.split('/')[1];
    let albumUrl="/"+token+"/viewalbum/"+album.id

    return (
        <div>
            <div className="album-card-container">
                    <Link to={albumUrl} className="anchor">
                        <div className="album-avatar"></div>
                    </Link>           
                    <div className="album-info">
                    <Link to={albumUrl} className="anchor">
                        <div className="album-title">{album.title}</div>
                        <div className="album-credits">{album.credits}</div>
                    </Link> 
                        <div className="album-options">
                            <img className={like?"hide":"album-like-icon"} onClick={toggleLike} src={HeartBlack} alt=""/>
                            <img className={like?"album-like-icon":"hide"} onClick={toggleLike} src={HeartGreen} alt=""/>
                            <img className="album-play-btn" src={PlayGreen} alt=""/>
                        </div>
                    </div>
                </div>            
        </div>
    )
}

export default AlbumCard
