import React from 'react';
import './Cart.css'

const Cart = ({ cart, handelRemoveFromCart }) => {
  let massage;
  if (cart.length === 0) {
    massage = <p className='blue'>Please Add some products</p>
  }
  else {
    massage = <div>
      <h3 className='orange'>borolock</h3>
      <p><small>Thanks for shopping</small></p>
    </div>
  }
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {
        cart.length > 2
          ? <span className='orange'>You are borolok</span>
          : <p>tumi gorib</p>
      }
      {massage}
      {
        cart.map(tShirt => <p
          key={tShirt._id}
        >{tShirt.name} <button onClick={() => handelRemoveFromCart(tShirt._id)}>X</button></p>)
      }
      {
        cart.length === 2 && <p>Dubol Bonanjs</p>
      }
      {
        cart.length === 3 || <h3 className='gray'>Tin Ta To Hoilo na</h3>
      }
    </div>
  );
};

export default Cart;