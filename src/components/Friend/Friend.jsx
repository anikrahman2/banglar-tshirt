import React from 'react';

const Friend = ({ring}) => {
  return (
    <div>
      <h2>Friend</h2>
      {
        ring && <p>ring: {ring}</p>
      }
    </div>
  );
};

export default Friend;