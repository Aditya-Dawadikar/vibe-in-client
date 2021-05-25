import React from 'react'
import Sidebar from '../../components/Sidebar/SidebarUser'
import ViewAlbum from '../../components/Main/ViewAlbum'
import Player from '../../components/Player/Player'
import {Row,Col,Container} from 'react-bootstrap'
import '../../components/Style.css'

const UserViewAlbum = () => {
    return (
        <div className="occupy-page">
            <Row style={{margin:"0",padding:"0"}}></Row>
                <Col  md={2} sm={6} style={{padding:"0",height:"100vh"}}>
                    <Sidebar/>
                </Col>
                <Col md={10} sm={6} style={{padding:"0",height:"100vh"}}>
                    <ViewAlbum/>
                </Col>
            <Player show={true}/>
        </div>
    )
}

export default UserViewAlbum
