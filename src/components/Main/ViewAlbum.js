import React,{useState} from 'react'
import '../Style.css'
import HeartGreen from '../../assets/heart-green.png'
import HeartBlack from '../../assets/heart-black.png'

import TrackCardLong from '../Cards/TrackCardLong'

const ViewAlbum = () => {
    const [like,likeSetter] = useState(false);
    const [tracks,tracksSetter] = useState([
        {
            title:"Blinding Lights",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"Save your tears",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"In your eyes",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"The Hills",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"Blinding Lights",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"Save your tears",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"In your eyes",
            credits:"Weeknd",
            album:"Blinding Lights",
        },{
            title:"The Hills",
            credits:"Weeknd",
            album:"Blinding Lights",
        },
    ])

    const toggleLike=()=>{
        likeSetter(!like)
    }

    return (
        <div className="album-bg">
            <div className="album-hero">
                <div className="album-view-info">
                    <div className="album-view-title">Blinding Lights</div>
                    <div className="album-view-credits">Weeknd</div>
                    <div className="album-view-meta">
                        <div className="attribute">1000 likes <div className="dot"></div></div>
                        <div className="attribute">30 songs <div className="dot"></div></div>
                        <div className="attribute">1hr 14mins <div className="dot"></div></div>
                    </div>
                    <div className="options">
                        <img className={like?"hide":"album-view-like-btn"} onClick={()=>{toggleLike()}} src={HeartBlack} alt="" />
                        <img className={like?"album-view-like-btn":"hide"} onClick={()=>{toggleLike()}} src={HeartGreen} alt="" />
                    </div>
                </div>
            </div>
            <div className="track-container">
                <ul className="track-list">
                    {
                        tracks.map((track,index)=>{
                            return <li className="track" key={index}><TrackCardLong track={track}/></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ViewAlbum
