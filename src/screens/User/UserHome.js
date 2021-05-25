import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/SidebarUser'
import Home from '../../components/Main/Home'
import Player from '../../components/Player/Player'

import {Row,Col} from 'react-bootstrap'
import '../../components/Style.css'

const UserHome = () => {


    fetch('http://localhost:3030/track/all')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    });


    return (
        <div className="occupy-page">
            <Row style={{margin:"0",padding:"0"}}>
                <Col  md={2} sm={6} style={{padding:"0",height:"100vh"}}>
                    <Sidebar/>
                </Col>
                <Col md={10} sm={6} style={{padding:"0",height:"100vh"}}>
                    <Home/>
                </Col>
                <Player show={true}/>
            </Row>
        </div>
    )
}

export default UserHome
