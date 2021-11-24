import axios from '../axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstant';

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST, payload: { email, password }
    });
    try {
        const { data } = await axios.post('/api/user/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 'Invalid email or password'
        })
    }
};

export const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post('/api/user/register', { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        alert("successfully registered..")
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        
        
        localStorage.setItem('userInfo', JSON.stringify(data));
        
        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
    
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_LOGOUT });
    document.location.href = "/signin"
}