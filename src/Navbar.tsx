import React, { useState } from "react";
import "./Navbar.css";
import { FaCartPlus, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const handleDown = () => {
    setIsDroppedDown(!isDroppedDown);
  };

  return (
    <div className="Navbar-class">
      <a href="home">Home</a>
      <a href="shop">Shop</a>
      <div
        onMouseEnter={handleDown}
        onMouseLeave={handleDown}
        style={{ marginTop: -3 }}
      >
        <a href="my account" style={{ paddingBottom: 10 }} className="account">
          My account <FaCaretDown />
        </a>
        {isDroppedDown && (
          <div className="dropdown-menu">
            <a href="orders">Orders</a>
            <hr></hr>
            <a href="address">Address</a>
            <hr></hr>
            <a href="a">Account details</a>
          </div>
        )}
      </div>
      <a href="about">About</a>
      <a href="contact">Contact</a>
      <div style={{ marginLeft: "100px" }}>
        <span className="cart-price">$0.00</span>
        <div className="notification-circle">0</div>
        <FaCartPlus className="cart-icon" />
      </div>
    </div>
  );
};

export default Navbar;
