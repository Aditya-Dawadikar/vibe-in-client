import React,{useState} from 'react'
import './Login.css';
import logo from '../../assets/logo.svg'
import LoginForm from '../../components/LoginForm/LoginSignup';

const Login = () => {
    const tabs=['login','signup'];
    const [tab,setTabActive]=useState(tabs[0]);
    
    const activateLoginTab=()=>{
        setTabActive(tabs[0]);
    }

    const activateSignupTab=()=>{
        setTabActive(tabs[1]);
    }

    return (
        <div>
            <div className="container-bg">
                <div className="left-bg"></div>
            </div>
            <div className="container-fg">
                <div className="left-fg">
                    <div className="left-fg-box"></div>
                    <div className="brand-container">
                        <img className="logo" src={logo} alt="vibe-in Inc. logo"/>
                        <div className="brand-name">Vibe-In</div>
                    </div>
                </div>
                <div className="right-fg">
                    <div className="tab-toggle">
                        <ul className="tabs">
                            <li onClick={()=>{activateLoginTab()}} className={tab===tabs[0]?'tab active':'tab'}>Login</li>
                            <li onClick={()=>{activateSignupTab()}} className={tab===tabs[1]?'tab active':'tab'}>Signup</li>
                        </ul>
                    </div>
                    <div className="form-holder">
                        <LoginForm isLogin={tab} tabs={tabs} signupSuccess={activateLoginTab} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
