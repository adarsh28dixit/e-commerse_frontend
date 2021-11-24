import React, { useState } from 'react'
import Checkout from '../components/checkout'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartAction'


function ShippingAddress(props) {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const cart = useSelector(state => state.cart);
    const{shippingAddress} = cart;
    if(!userInfo){
        props.history.push('/signin');
    }

    

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [email, setEmail] = useState(shippingAddress.email);
    const [phone, setPhone] = useState(shippingAddress.phone);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalcode, setPostalCode] = useState(shippingAddress.postalcode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ fullName,email, phone, address, city, postalcode, country }));
        props.history.push('/payment');
    }
    return (
        <div>
            <Checkout step1 step2></Checkout>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="fullName">Email</label>
                    <input type="text" id="fullName" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="fullName">Phone</label>
                    <input type="text" id="fullName" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="Address">Address</label>
                    <input type="text" id="Address" value={address} onChange={(e) => setAddress(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="City">City</label>
                    <input type="text" id="City" value={city} onChange={(e) => setCity(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="postalcode">Postal Code</label>
                    <input type="text" id="postalcode" value={postalcode} onChange={(e) => setPostalCode(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="Country">Country</label>
                    <input type="text" id="Country" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
                </div>
                <button type="submit" class="btn btn-warning">Continue</button>
            </form>
        </div>
    )
}

export default ShippingAddress
