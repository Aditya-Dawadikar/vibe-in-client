import React,{useState}  from 'react'
import '../../components/Style.css'
import TrackGrid from '../Lists/TrackGrid'

const MyTracks = () => {
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
            <TrackGrid banner={banner}/>
        </div>
    )
}

export default MyTracks
