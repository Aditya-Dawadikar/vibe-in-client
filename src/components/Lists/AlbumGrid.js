import React from 'react'
import '../Style.css'
import Grid from '@material-ui/core/Grid'
import AlbumCard from '../Cards/AlbumCard'

const AlbumGrid = (props) => {
    return (
        <Grid container item xs={12}>
            {
                props.banner.albums.map((album,index)=>{
                    return <AlbumCard album={album}/>
                })
            }        
        </Grid>
    )
}

export default AlbumGrid
