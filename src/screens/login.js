import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { signin } from '../actions/userAction'

import Messagbox from '../components/messagbox'

function Login(props) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    const userLogin = useSelector(state => state.userLogin);
    const{ userInfo, error }  = userLogin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    

    useEffect(() => {
         if(userInfo){
             props.history.push(redirect);
            }
    },[props.history, redirect, userInfo]);
    return (
        <div className="login">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h3 className="login-heading">Sign in</h3>
                    <form onSubmit={submitHandler}>
                        {error && <Messagbox varient="danger">{error}</Messagbox>}
                        <input type="text" className="fadeIn second" placeholder="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="text"  className="fadeIn third" placeholder="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button id="sg" className="btn btn-primary" type="submit">Login</button>
                    </form>


                    <div id="formFooter">
                        Don't have an account?{" "}<Link className="underlineHover" to="/register">Register</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
