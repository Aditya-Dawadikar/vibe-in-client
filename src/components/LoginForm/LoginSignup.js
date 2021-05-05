import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './LoginSignup.css';

const LoginSignup = (props) => {

    const [loginForm,loginFormSetter]=useState({
        email:"",
        password:"",
    })

    const [signupForm,signupFormSetter]=useState({
        email:"",
        password:"",
        confirmPassword:"",
    })

    let loginFormObject,signupFormObject

    const inputLoginHandler=(e)=>{
        loginFormSetter((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const inputSignupHandler=(e)=>{
        signupFormSetter((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const loginHandler=(e)=>{
        e.preventDefault();
        console.log(loginForm);
        loginFormObject.reset()
    }

    const signupHandler=(e)=>{
        e.preventDefault();
        console.log(signupForm);
        signupFormObject.reset()
        props.signupSuccess()
    }

    if(props.isLogin===props.tabs[0]){
        return (
            <div>
                <Form className="login-form" ref={ form => loginFormObject = form }>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={inputLoginHandler} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={inputLoginHandler} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={loginHandler} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
            </div>
        )
    }else{
        return (
            <div>
                <Form className="login-form" ref={form=> signupFormObject=form}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={inputSignupHandler} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={inputSignupHandler} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={inputSignupHandler} name="confirmPassword" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button onClick={signupHandler} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
            </div>
        )
    }
    
}

export default LoginSignup
