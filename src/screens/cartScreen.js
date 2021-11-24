import React from 'react'
import { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function CartScreen({ match, location }) {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    console.log(cartItems)

    const removeCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        history.push("/shipping")
    }

    return (
        <div className="cartscreen">
            {
                cartItems.map((items) => (
                    <div className="container">
                        <table id="cart" className="table table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th >Product</th>
                                    <th >Price</th>
                                    <th >Quantity</th>
                                    <th className="text-center">Subtotal</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-th="Product">
                                        <div className="row">
                                            <div className="col-sm-2 hidden-xs"><img src={items.image} alt="" className="img-responsive" /></div>
                                            <div id="prod-des" className="col-sm-10">
                                                <h4 className="nomargin">{items.brand}</h4>
                                                <p>{items.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">₹{items.new_price}</td>
                                    <td data-th="Quantity">
                                        {items.qty}
                                    </td>
                                    <td data-th="Subtotal" className="text-center">₹{items.new_price * items.qty}</td>
                                    <td className="actions" data-th="">

                                        <button onClick={() => removeCartHandler(items.product)} className="btn btn-danger btn-sm"><DeleteForeverIcon /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                    </div>

                ))
            }
            <tfoot className="total">
                
                <tr>
                    <td><Link to="/" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                    <td id="total-qty" className="hidden-xs"><strong>Items ({cartItems.reduce((a, c) => a + c.qty, 0)}) : {" "}</strong></td>
                    <td id="total-price" className="hidden-xs text-center"><strong>Total ₹{cartItems.reduce((a, c) => a + c.new_price * c.qty, 0)}</strong></td>
                    <td><Link to="#" onClick={checkoutHandler}  className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></Link></td>
                </tr>
            </tfoot>

        </div>
    )
}

export default CartScreen
