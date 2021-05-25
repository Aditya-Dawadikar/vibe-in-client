import React,{useState} from 'react'
import TrackCard from '../Cards/TrackCard'
import '../Style.css'
import {NavLink} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'

const TrackBanner = (props) => {
    const [banner,bannerSetter] = useState({
        bannerName:"Camila Cabello",
        tracks:[
            {
                title:"Senorita",
                credits:"Camila Cabello,Shawn Mendes"
            },{
                title:"Bad Thinds",
                credits:"Machine Gun Kelly, Camila Cabello"
            },{
                title:"havana",
                credits:"Camila Cabello"
            },{
                title:"Senorita",
                credits:"Camila Cabello,Shawn Mendes"
            },{
                title:"Bad Thinds",
                credits:"Machine Gun Kelly, Camila Cabello"
            },{
                title:"havana",
                credits:"Camila Cabello"
            },{
                title:"Senorita",
                credits:"Camila Cabello,Shawn Mendes"
            },{
                title:"Bad Thinds",
                credits:"Machine Gun Kelly, Camila Cabello"
            },{
                title:"havana",
                credits:"Camila Cabello"
            }
        ]
    })

    let currentUrl = window.location.pathname
    let token= currentUrl.split('/')[1];
    let albumUrl="/"+token+"/alltracks/"

    return (
        <div className="banner">
            <div className="banner-in">
                <div className="track-list-header">
                    <div className="row-header">{banner.bannerName}</div>
                    <NavLink className="link" to={albumUrl}>See All</NavLink>
                </div>
                <Grid container item xs={12}>
                    {
                        banner.tracks.map((track,index)=>{
                            {/* return <li key={index}><TrackCard playSong={()=>{showPlayer()}}  track={track} /></li> */}
                            if(index<7)
                            return <TrackCard  mode={props.mode} track={track} />
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default TrackBanner
