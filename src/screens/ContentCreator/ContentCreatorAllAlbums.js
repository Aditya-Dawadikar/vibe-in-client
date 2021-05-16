import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/SidebarContentCreator'
import AllAlbums from '../../components/Main/AllAlbums'

import {Row,Col} from 'react-bootstrap'
import '../../components/Style.css'

const UserAllAlbums = () => {
    return (
        <div className="occupy-page">
            <Row style={{margin:"0",padding:"0"}}>
                <Col  md={2} sm={5} style={{padding:"0",height:"100vh"}}>
                    <Sidebar/>
                </Col>
                <Col md={10} sm={7} style={{padding:"0",height:"100vh"}}>
                    <Row style={{margin:"0",padding:"0"}}><AllAlbums/></Row>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAlbums
