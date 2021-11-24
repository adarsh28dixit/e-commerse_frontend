import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsOrder } from '../actions/orderAction';
import Messagbox from '../components/messagbox'

function OrderScreen(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, error } = orderDetails;



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);
    console.log(order);
    return (
        <>
            <div className="row">
                <div className="col-sm-7">
                    <div className="card w-75">
                        <div className="card-body">
                            <h5 className="card-title">Shipping Address</h5>
                            <p className="card-text"><strong>Name:{" "}{order.shippingAddress.fullName}</strong></p>
                            <p className="card-text"><strong>Address:{" "}{order.shippingAddress.address}, {order.shippingAddress.city},<br />
                                {order.shippingAddress.postalcode}<br />{order.shippingAddress.country}</strong></p>
                            {
                                order.isDelivered ? (<Messagbox> Delivered at {order.deliveredAt}</Messagbox>) 
                                : (<Messagbox> Not Delivered</Messagbox>)
                            }
                        </div>
                    </div>
                    <div className="card w-75">
                        <div className="card-body">
                            <h5 className="card-title">Payment</h5>
                            <p className="card-text"><strong>Method:{" "}{order.paymentMethod}</strong></p>
                            {
                                order.isPaid ? (<Messagbox> Paid at {order.paidAt}</Messagbox>) 
                                : (<Messagbox> Not Paid</Messagbox>)
                            }
                        </div>
                    </div>

                    <div className="card w-75" >
                        <h5 className="card-title">Order Items</h5>
                        {
                            order.orderItems.map((item) => (

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
                            
                            <p className="card-text"><strong>Total items price:{" "}₹{order.itemsPrice}</strong></p>
                            <p className="card-text"><strong>Delivery charge:{" "}₹{order.shippingCharge}</strong></p>
                            <p className="card-text"><strong>Total tax:{" "}₹{order.taxPrice}</strong></p><br />
                            <p className="card-text"><strong>Total cost:{" "}₹{order.totalPrice}</strong></p>

                        </div>
                    </div>
                </div>
            </div>

        

            </>


    )
}

export default OrderScreen
