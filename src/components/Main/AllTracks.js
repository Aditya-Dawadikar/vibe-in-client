import React,{useState} from 'react'
import '../Style.css'
import TrackGrid from '../Lists/TrackGrid'

const AllTracks = () => {
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
    return (
        <div className="main">
            <div className="view-hero"></div>
            <div className="row-header margin-top-bottom-30">{banner.bannerName}</div>
            <TrackGrid banner={banner}/>
        </div>
    )
}

export default AllTracks
