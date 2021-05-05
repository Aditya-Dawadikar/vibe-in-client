import React from 'react'
import './TrackCard.css'
import PlayGreen from '../../assets/player/play-green.png'
import {useDispatch} from 'react-redux'
import {setTrack,setTrackDetails} from '../../redux/Player'
import track1 from '../../assets/5.mp3'

const TrackCard = (props) => {
    const playSong=()=>{
        props.playSong();
        dispatch(setTrack(track1))
        dispatch(setTrackDetails(props.track))
    }
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="hero"></div>
            <div className="title">{props.track.title}</div>
            <div className="meta">{props.track.meta}</div>
            <button className="play-btn" onClick={playSong}><img className="play-btn icon" src={PlayGreen} alt=""/></button>
        </div>
    )
}

export default TrackCard
