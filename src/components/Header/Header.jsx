import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/orders'>Order Review</Link>
      <Link to='/grandpa'>Grandpa</Link>
      <Link to='/checkout'>Checkout</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact Us</Link>
    </nav>
  );
};

export default Header;