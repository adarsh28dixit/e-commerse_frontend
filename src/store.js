import { combineReducers, compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer';
import { createOrderReducer, orderDetailsReducer } from './reducers/orderReducer';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';


const cartItemFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) : null;


const initialState = {
    cart: {
        cartItems: cartItemFromStorage,
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
        paymentMethod: 'Paypal',
    },
    userLogin: { userInfo: userInfoFromStorage },

};

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderCreate: createOrderReducer,
    orderDetails: orderDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;