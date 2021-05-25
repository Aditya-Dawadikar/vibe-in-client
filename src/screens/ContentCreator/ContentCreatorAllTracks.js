import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/SidebarContentCreator'
import AllTracks from '../../components/Main/AllTracks'
import Player from '../../components/Player/Player'

import {Row,Col} from 'react-bootstrap'
import '../../components/Style.css'

const UserAllTracks = () => {
    return (
        <div className="occupy-page">
            <Row style={{margin:"0",padding:"0"}}>
                <Col  md={2} sm={6} style={{padding:"0",height:"100vh"}}>
                    <Sidebar/>
                </Col>
                <Col md={10} sm={6} style={{padding:"0",height:"100vh"}}>
                    <AllTracks/>
                </Col>
                <Player show={true}/>
            </Row>
        </div>
    )
}

export default UserAllTracks
