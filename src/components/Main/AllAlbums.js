import React,{useState} from 'react'
import '../Style.css'
import AlbumGrid from '../Lists/AlbumGrid'

const AllAlbums = () => {
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

    return (
        <div className="main">
            <div className="view-hero"></div>
            <div className="row-header margin-top-bottom-30">{banner.bannerName}</div>
            <AlbumGrid banner={banner}/>
        </div>
    )
}

export default AllAlbums
