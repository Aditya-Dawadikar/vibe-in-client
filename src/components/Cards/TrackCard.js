import React,{useState,useEffect} from 'react'
import '../Style.css'
import PlayGreen from '../../assets/player/play-green.png'
import DropDown from '../DropDown/DropDown'

const TrackCard = (props) => {

    const modes=['edit','view']

    const playSong=()=>{
        props.playSong();
    }

    let track=props.track;

    return (
        <div className="track-card">
            <DropDown mode={props.mode}/>
            <div className="track-hero"></div>
            <div className="track-title">{track.title}</div>
            <div className="track-meta">{track.credits}</div>
            <img className="track-play-btn" src={PlayGreen} onClick={playSong} alt=""/>
        </div>
    )
}

export default TrackCard
