import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
  const ancti = useContext(RingContext)
  return (
    <div>
      <h2>Special</h2>
      <p>ring: {ancti}</p>
    </div>
  );
};

export default Special;