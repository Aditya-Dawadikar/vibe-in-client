import React from 'react'
import Sidebar from '../../components/Sidebar/SidebarUser'

import {Row,Col,Container} from 'react-bootstrap'
import '../../components/Style.css'
import SavedTracks from '../../components/Main/SavedTracks'

const UserSavedSongs = () => {
    return (
        <div className="occupy-page">
            <Row style={{margin:"0",padding:"0"}}>
                <Col  md={2} sm={5} style={{padding:"0",height:"100vh"}}>
                    <Sidebar/>
                </Col>
                <Col md={10} sm={7} style={{padding:"0",height:"100vh"}}>
                    <Row style={{margin:"0",padding:"0"}}><SavedTracks/></Row>
                </Col>
            </Row>
        </div>
    )
}

export default UserSavedSongs