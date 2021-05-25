import React,{useState} from 'react'
import AlbumCard from '../Cards/AlbumCard'
import '../Style.css'
import Grid from '@material-ui/core/Grid'

import {NavLink} from 'react-router-dom'

const AlbumBanner = (props) => {
    const [banner,bannerSetter] = useState({
        bannerName:"Pop 2021",
        albums:[{
            title:"StarBoy",
            credits:"Weeknd",
            id:"1"
        },{
            title:"Blinding Lights",
            credits:"Weeknd",
            id:"2"
        },{
            title:"Friends",
            credits:"Anne Marie, Marshmello",
            id:"3"
        },{
            title:"StarBoy",
            credits:"Weeknd",
            id:"1"
        },{
            title:"Blinding Lights",
            credits:"Weeknd",
            id:"2"
        },{
            title:"Friends",
            credits:"Anne Marie, Marshmello",
            id:"3"
        },{
            title:"StarBoy",
            credits:"Weeknd",
            id:"1"
        },{
            title:"Blinding Lights",
            credits:"Weeknd",
            id:"2"
        },{
            title:"Friends",
            credits:"Anne Marie, Marshmello",
            id:"3"
        }]
    })

    let currentUrl = window.location.pathname
    let token= currentUrl.split('/')[1];
    let albumUrl="/"+token+"/allalbums/"

    return (
        <div className="banner">
            <div className="banner-in">
                <div className="track-list-header">
                    <div className="row-header">{banner.bannerName}</div>
                    <NavLink className="link" to={albumUrl}>See All</NavLink>
                </div>
                <Grid container item xs={12}>
                    {
                        banner.albums.map((album,index)=>{
                            if(index<4)
                            return <AlbumCard album={album}  mode={props.mode}/>
                        })
                    }        
                </Grid>
            </div>
        </div>
    )
}

export default AlbumBanner
