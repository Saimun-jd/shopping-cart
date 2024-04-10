import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const cartItems = useSelector(state => state.cart);
  const totalItems = cartItems.reduce((total, item) => total += item.quantity, 0);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <NavLink to="/">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </NavLink>

        <div className="flex gap-4">
          <NavLink to="/" className="navHome" id="lws-home"> Home </NavLink>
          <NavLink to="cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalItems}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
