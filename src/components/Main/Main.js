import React,{useState} from 'react'
import './Main.css'
import TrackCard from '../TrackCard/TrackCard'
import Player from '../Player/Player'
import {Row} from 'react-bootstrap'

const Main = () => {
    const [player,setPlayer] = useState(false)
    const [tracks,tracksSetter] = useState([
        {
            title:"Despacito",
            meta:"Daddy yanky, Justin Bieber",
            runTime:"3:24"
        },{
            title:"Senorita",
            meta:"Cameila camilo",
            runTime:"2:51"
        },{
            title:"Cheap Thrills",
            meta:"Sia",
            runTime:"3:01"
        },{
            title:"Magenta Riddim",
            meta:"DJ snake",
            runTime:"2:47"
        },{
            title:"Girls like you",
            meta:"Maroon 5",
            runTime:"2:27"
        },{
            title:"Best day of my life",
            meta:"American Authors",
            runTime:"3:17"
        }
    ])

    return (
        <div className="main">
            <div className="banner">
                <div className="track-list-header">
                    <div className="row-header">Recent</div>
                    <div className="link"><a>See all</a></div>
                </div>
                <Row>
                    {
                        tracks.map(function(track){
                            return <li key={track.title}><TrackCard playSong={()=>{setPlayer(true)}}  track={track} /></li>
                        })
                    }
                </Row>
            </div>
            <div className="space-maker" ></div>
            <Player show={player}/>
        </div>
    )
}

export default Main
