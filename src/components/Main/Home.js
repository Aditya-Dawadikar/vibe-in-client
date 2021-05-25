import React from 'react'
import '../../components/Style.css'
import TrackBanner from '../Lists/TrackBanner'
import AlbumBanner from '../Lists/AlbumBanner'

const Home = (props) => {

    return (
        <div className="main">
            <div className="view-hero"></div>
            <AlbumBanner />
            <TrackBanner/>
            <TrackBanner/>
        </div>
    )
}

export default Home
