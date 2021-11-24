import axios from '../axios';
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../constants/orderConstant"
import {CART_EMPTY} from '../constants/cartConstant'

export const createOrder = (order) => async(dispatch, getState) => {
    dispatch({type: CREATE_ORDER_REQUEST, payload: order});
    try{
        const {userLogin : {userInfo}} = getState();
        const {data} = await axios.post('/api/order', order, {
            headers: {
                
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order})
        dispatch({type: CART_EMPTY});
        localStorage.removeItem('cartItems');
    }catch(error){
        dispatch({type: CREATE_ORDER_FAIL, payload: error.message});
    }
};

export const detailsOrder = (orderId) => async(dispatch, getState) => {
    dispatch({type: ORDER_DETAILS_REQUEST, payload: orderId});
    const {userLogin: {userInfo},} = getState();
    try{
        const {data} = await axios.get(`/api/order/${orderId}`, {
            headers : {Authorization: `Bearer ${userInfo.token}`},
        });
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dispatch({typr: ORDER_DETAILS_FAIL, payload: error.message})
    }
}