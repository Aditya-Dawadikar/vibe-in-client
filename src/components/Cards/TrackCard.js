import React,{useState} from 'react'
// import './TrackCard.css'
import '../Style.css'
import PlayGreen from '../../assets/player/play-green.png'
import HeartBlack from '../../assets/heart-black.png'
import HeartGreen from '../../assets/heart-green.png'

const TrackCard = (props) => {
    const [like,likeSetter] = useState(false)
    const toggleLike=()=>{
        likeSetter(!like)
    }
    
    const playSong=()=>{
        props.playSong();
    }

    let track=props.track;
    return (
        <div className="track-card">
            <div className="track-hero"></div>
            <div className="track-title">{track.title}</div>
            <div className="track-meta">{track.credits}</div>
            <img className={like?"hide":"track-heart"} src={HeartBlack} onClick={()=>{toggleLike()}} alt=""/>
            <img className={like?"track-heart":"hide"} src={HeartGreen} onClick={()=>{toggleLike()}} alt=""/>
            <img className="track-play-btn" src={PlayGreen} onClick={playSong} alt=""/>
        </div>
    )
}

export default TrackCard
