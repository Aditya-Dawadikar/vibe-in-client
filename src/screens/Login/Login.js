import React,{useState} from 'react'
// import './Login.css';
import '../../components/Style.css'
import logo from '../../assets/logo.svg'
import LoginForm from '../../components/Forms/LoginSignup';

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
            <div className="login-container-bg">
                <div className="login-left-bg"></div>
            </div>
            <div className="login-container-fg">
                <div className="login-left-fg">
                    <div className="login-left-fg-box"></div>
                    <div className="login-brand-container">
                        <img className="login-logo" src={logo} alt="vibe-in Inc. logo"/>
                        <div className="login-brand-name">Vibe-In</div>
                    </div>
                </div>
                <div className="login-right-fg">
                    <div className="login-tab-toggle">
                        <ul className="login-tabs">
                            <li onClick={()=>{activateLoginTab()}} className={tab===tabs[0]?'login-tab login-active':'login-tab'}>Login</li>
                            <li onClick={()=>{activateSignupTab()}} className={tab===tabs[1]?'login-tab login-active':'login-tab'}>Signup</li>
                        </ul>
                    </div>
                    <div className="login-form-holder">
                        <LoginForm isLogin={tab} tabs={tabs} signupSuccess={activateLoginTab} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
