import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
  const tShirts = useLoaderData()
  const [cart, setCart] = useState([])


  const handelAddToCart = tShirt => {
    const exist = cart.find(ts => ts._id === tShirt._id)
    if (exist) {
      toast('you already add this t-shirt')
    }
    else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  }
  const handelRemoveFromCart = id => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining)
  }
  return (
    <div className='home-container'>
      <div className='tShirts-container'>
        {
          tShirts.map(tShirt => <TShirt
            tShirt={tShirt}
            key={tShirt._id}
            handelAddToCart={handelAddToCart}
          ></TShirt>)
        }
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          handelRemoveFromCart={handelRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;