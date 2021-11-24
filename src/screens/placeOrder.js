import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../actions/orderAction';

import Checkout from '../components/checkout'
import { CREATE_ORDER_RESET } from '../constants/orderConstant';
import Messagbox from '../components/messagbox'
import axios from '../axios'

function PlaceOrder(props) {
    
    
    const [loading, setLoading] = useState(false);
    const [orderAmount, setOrderAmount] = useState(0);

    const cart = useSelector(state => state.cart);


    if (!cart.paymentMethod) {
        props.history.push("/payment")
    }

    const orderCreate = useSelector(state => state.orderCreate);
    const { success, order } = orderCreate;

    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.new_price, 0)
    );
    cart.totalItems = cart.cartItems.reduce((a, c) => a + c.qty, 0);
    cart.shippingCharge = cart.itemsPrice > 100 ? toPrice(0) : toPrice(20);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingCharge + cart.taxPrice;

    const dispatch = useDispatch();


    useEffect(() => {
        if (success) {
            props.history.push(`/order/${order._id}`);
            dispatch({ type: CREATE_ORDER_RESET });
        }
    }, [success, dispatch, order, props.history])

    /* payment integration*/

    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?');

        };
        script.onload = async () => {
            try {
                setLoading(true);
                const result = await axios.post('/api/order/create-order', {
                    amount: orderAmount + '00',
                });
                const { amount, id: order_id, currency } = result.data;
                const {
                    data: { key: razorpayKey },
                } = await axios.get('/api/order/get-razorpay-key');

                const options = {
                    key: razorpayKey,
                    amount: amount.toString(),
                    currency: currency,
                    name: 'adarsh dixit',
                    description: 'adarsh28dixit@gmail.com',
                    order_id: order_id,
                    handler: async function (response) {
                        const result = await axios.post('/api/order/pay-order', {
                            amount: amount,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                        });
                        alert(result.data.msg);

                    },
                    prefill: {
                        name: 'abc',
                        email: 'abc@gmail.com',
                        contact: '111111',
                    },
                    notes: {
                        address: 'New Delhi',
                    },
                    theme: {
                        color: '#80c0f0',
                    },
                };

                setLoading(false);
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (err) {
                alert(err);
                setLoading(false);
            }
        };
        document.body.appendChild(script);
    }

    return (
        <div>
            <Checkout step1 step2 step3 step4></Checkout>
            <div className="row">
                <div className="col-sm-7">
                    <div className="card w-75">
                        <div className="card-body">
                            <h5 className="card-title">Shipping Address</h5>
                            <p className="card-text"><strong>Name:{" "}{cart.shippingAddress.fullName}</strong></p>
                            <p className="card-text"><strong>Email:{" "}{cart.shippingAddress.email}</strong></p>
                            <p className="card-text"><strong>Phone:{" "}{cart.shippingAddress.phone}</strong></p>
                            <p className="card-text"><strong>Address:{" "}{cart.shippingAddress.address}, {cart.shippingAddress.city},<br />
                                {cart.shippingAddress.postalcode}<br />{cart.shippingAddress.country}</strong></p>

                        </div>
                    </div>
                    <div className="card w-75">
                        <div className="card-body">
                            <h5 className="card-title">Payment</h5>
                            <p className="card-text"><strong>Method:{" "}{cart.paymentMethod}</strong></p>

                        </div>
                    </div>

                    <div className="card w-75" >
                        <h5 className="card-title">Order Items</h5>
                        {
                            cart.cartItems.map((item) => (

                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">

                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text"><small className="text-muted">{item.brand}</small></p>
                                            <p className="card-text">Qty :{" "}{item.qty}</p>
                                            <p className="card-text">Subtotal:{" "}₹{item.qty * item.new_price}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>



                </div>

                <div className="col-sm-5">
                    <div className="card w-40">
                        <div className="card-body">
                            <h5 className="card-title">Order summary</h5>
                            <p className="card-text"><strong>Total items :{" "}{cart.totalItems}</strong></p>
                            <p className="card-text"><strong>Total items price:{" "}₹{cart.itemsPrice}</strong></p>
                            <p className="card-text"><strong>Delivery charge:{" "}₹{cart.shippingCharge}</strong></p>
                            <p className="card-text"><strong>Total tax:{" "}₹{cart.taxPrice}</strong></p><br />
                            <p className="card-text"><strong>Total cost:{" "}₹{cart.totalPrice}</strong></p>
                            <input
                                placeholder="INR"
                                type="number"
                                value={orderAmount}
                                onChange={(e) => setOrderAmount(e.target.value)}
                            ></input>
                            <button onClick={loadRazorpay} type="button" className="btn btn-primary">Pay with Razorpay</button>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default PlaceOrder
