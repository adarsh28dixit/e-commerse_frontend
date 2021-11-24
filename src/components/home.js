import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux'
import { listProduct } from '../actions/productAction';


function Home() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {product} = productList;

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])
    console.log(product);
    return (
        <div className="home">
            <div className="container">
                {
                    product.map((item) => (
                        <div key={item._id} className="card">
                            <Link to={`/product/${item._id}`}><img src={item.image} className="card-img-top" alt="" /></Link>
                            <div className="card-body">
                                <Link className="card-title" to={`/product/${item._id}`}><h5 className="card-title">{item.description}</h5></Link>
                                <p>{item.brand} <br /> {item.review} Reviews{" "} {item.order} Orders <br />
                                    <strong>₹{item.new_price}</strong>{" "} <del>₹{item.old_price}</del></p>
                               
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Home
