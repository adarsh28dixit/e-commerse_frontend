import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { register } from '../actions/userAction';
import {useDispatch, useSelector} from 'react-redux'
import Messagbox from '../components/messagbox';

function Register(props) {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const  dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const {userInfo, error} = userRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password and confirmpassword are not same')
        } else {
            dispatch(register(name, email, password))
        }
    }

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history, redirect, userInfo])
    return (
        <div className="register">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <h3 className="login-heading">Register</h3>
                    <form onSubmit={submitHandler}>
                        {error && <Messagbox varient="danger">{error}</Messagbox>}
                        <input type="text"  className="fadeIn second"  placeholder="name" value={name}
                        onChange={(e) => setName(e.target.value)}/>
                        <input type="text"  className="fadeIn second"  placeholder="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text"  className="fadeIn third"  placeholder="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <input type="text"  className="fadeIn third"  placeholder="confirm password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                        <button id="sg" className="btn btn-primary" type="submit">Register</button>
                    </form>


                    <div id="formFooter">
                   Already have an account?{" "}<Link className="underlineHover" to="/signin">Login</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
