import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartAction';
import Checkout from '../components/checkout'

function Payment(props) {
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }

    const[paymentMethod, setPaymentMethod] = useState('Paypal');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder')
    }
    return (
        <div>
            <Checkout step1 step2 step3></Checkout>
            <form className="form" onSubmit={submitHandler}>
        <div className="paymentmethod">
          <h1>Payment Method</h1>
        </div>
        <div className="paymentmethod">
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div className="paymentmethod">
          <div>
            <input
              type="radio"
              id="stripe"
              value="Razorpay"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Pay with razorpay</label>
          </div>
        </div>
        <div className="paymentmethod">
          <label />
          <button type="submit" class="btn btn-warning">Continue</button>
        </div>
      </form>
        </div>
    )
}

export default Payment
