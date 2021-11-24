import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signout } from '../actions/userAction';

function Header() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const history = useHistory();
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signout());
    }

    const loginHandler = () => {
        history.push("/signin")
    }
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ADARSH</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        </ul>
                        <form className="d-flex">
                            <Link to="/cartscreen"><AddShoppingCartIcon className="cart-icon" />
                                {
                                    cartItems.length > 0 && (
                                        <strong className="badge">{cartItems.length}</strong>
                                    )
                                }
                            </Link>
                            {
                                userInfo ? (


                                    <div className="btn-group">
                                        <button type="button" id="head" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <AccountCircleIcon className="avatar"/>{userInfo.name}
                                        </button>
                                        <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                                            <li><Link onClick={signOutHandler} className="dropdown-item" >Sign Out</Link></li>
                                            
                                            
                                        </ul>
                                    </div>
                                ) : (
                                    <button onClick={loginHandler} id="header-btn" className="btn btn-success" type="submit">SignIn</button>

                                )
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
