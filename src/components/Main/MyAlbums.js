import React,{useState} from 'react'
import '../../components/Style.css'
import AlbumGrid from '../Lists/AlbumGrid'

const MyAlbums = () => {
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
            <AlbumGrid mode={"edit"} banner={banner}/>
        </div>
    )
}

export default MyAlbums
