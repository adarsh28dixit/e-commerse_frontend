
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import SingleProduct from './components/singleProduct';
import Header from './components/header';
import Footer from './components/footer';
import CartScreen from './screens/cartScreen';
import Login from './screens/login';
import Register from './screens/register';
import Checkout from './components/checkout';
import ShippingAddress from './screens/shippingAddress';
import Payment from './screens/payment';
import PlaceOrder from './screens/placeOrder';
import OrderScreen from './screens/orderScreen';
import Order from './components/order';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>

      <Route path="/" component={Home} exact></Route>
      <Route path="/signin" component={Login} ></Route>
      <Route path="/register" component={Register} ></Route>
      
      <Route path="/product/:id" component={SingleProduct} ></Route>
      
      <Route path="/cartscreen/:id?" component={CartScreen} ></Route>
      <Route path="/checkout" component={Checkout} ></Route>
      <Route path="/shipping" component={ShippingAddress} ></Route>
      <Route path="/payment" component={Payment} ></Route>
      <Route path="/placeorder" component={PlaceOrder} ></Route>
      <Route path="/order/:id" component={OrderScreen} ></Route>
      <Route path="/order" component={Order} ></Route>

       <Footer/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
