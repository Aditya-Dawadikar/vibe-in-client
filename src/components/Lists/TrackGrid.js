import React from 'react'
import '../Style.css'
import Grid from '@material-ui/core/Grid'
import TrackCard from '../Cards/TrackCard'

const TrackGrid = (props) => {
    return (
        <Grid container item xs={12}>
            {
                props.banner.tracks.map((track,index)=>{
                    return <TrackCard track={track} />
                })
                }        
        </Grid>
    )
}

export default TrackGrid
