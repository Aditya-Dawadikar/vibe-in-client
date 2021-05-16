import React,{useState} from 'react'
// import './TrackCardLong.css'
import '../Style.css'
import {Col,Row} from 'react-bootstrap'

import PlayGreen from '../../assets/player/play-green.png'
import HeartGreen from '../../assets/heart-green.png'
import HeartBlack from '../../assets/heart-black.png'

const TrackCardLong = (props) => {
    const [like,likeSetter]= useState(false)

    const toggleLike=()=>{
        likeSetter(!like)
    }

    return (
        <div className="track-long">
            <Row>
                <Col sm={2}><div className="track-long-avatar"></div></Col>
                <Col sm={3} className="track-long-title">{props.track.title}</Col>
                <Col sm={3} className="track-long-credits">{props.track.credits}</Col>
                <Col sm={3} className="track-long-credits">{props.track.album}</Col>
                <Col sm={1}>
                    <div className="track-long-options">
                        <img className={like?"hide":"like-long-icon"} onClick={toggleLike} src={HeartBlack} alt=""/>
                        <img className={like?"like-long-icon":"hide"} onClick={toggleLike} src={HeartGreen} alt=""/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TrackCardLong
