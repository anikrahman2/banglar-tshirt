import React from 'react';
import './Tshirt.css'

const TShirt = ({tShirt, handelAddToCart}) => {
  const {picture, _id, name, price} = tShirt
  return (
    <div className='tShirt'>
      <img src={picture} alt="picture"></img>
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => handelAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;