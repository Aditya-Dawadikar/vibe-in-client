import React from 'react'
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import './UserDashBoard.css'

const UserDashBoard = () => {

    return (
        <div className="container-bg">
            <Header/>
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default UserDashBoard
