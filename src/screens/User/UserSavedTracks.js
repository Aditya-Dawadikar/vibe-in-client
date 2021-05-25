import React from 'react'
import Sidebar from '../../components/Sidebar/SidebarUser'
import Player from '../../components/Player/Player'
import {Row,Col,Container} from 'react-bootstrap'
import '../../components/Style.css'
import SavedTracks from '../../components/Main/SavedTracks'

const UserSavedSongs = () => {
    return (
        <div className="occupy-page">
            <Row style={{margin:"0",padding:"0"}}></Row>
                <Col  md={2} sm={6} style={{padding:"0",height:"100vh"}}>
                    <Sidebar/>
                </Col>
                <Col md={10} sm={6} style={{padding:"0",height:"100vh"}}>
                    <SavedTracks/>
                </Col>
                <Player show={true}/>
        </div>
    )
}

export default UserSavedSongs