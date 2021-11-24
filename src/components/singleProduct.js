import React, { useEffect, useState } from 'react'
import { detailsProduct } from '../actions/productAction';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';


function SingleProduct({ match }) {
    const [qty, setQty] = useState(1);
    const history = useHistory();

    const dispatch = useDispatch();

    const productDetail = useSelector(state => state.productDetail);
    const { product } = productDetail;

    useEffect(() => {
        dispatch(detailsProduct(match.params.id));
    }, [dispatch, match])
    console.log(product)

    const addToCartHandler = () => {
        history.push(`/cartscreen/${match.params.id}?qty=${qty}`)
    }
    return (


        <div className="container-fluid">
            <div className="singleproduct">
                <div className="singleproduct-img">
                    <img className="product-img"  src={product.image} alt="" /><br />
                </div>



                <div className="col-md-7">
                    <div className="product-title">{product.brand}</div>
                    <div className="product-desc">{product.description}</div>
                    <div className="product-rating"><i className="fas fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star gold"></i> <i className="fa fa-star-o"></i> </div>
                    <hr />
                    <div className="product-price"><strong>₹{product.new_price}</strong>{" "}<del>₹{product.old_price}</del></div>
                    <div className="product-stock">In Stock</div><br />
                    {
                        product.countInStock > 0 && (
                            <>
                                <div className="qty-row">
                                    <div className="product-qty">Qty :</div>
                                    <div className="product-option">
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {
                                                [...Array(product.countInStock).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div><br />
                            </>
                        )
                    }
                    <div className="product-review">{product.review} Reviews{" "}{product.order} Orders</div>
                    <hr />
                    <div className="btn-group cart">
                        <button onClick={addToCartHandler} type="button" className="btn btn-warning">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct
