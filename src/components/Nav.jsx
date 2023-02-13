import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../context/UserContext";

const Nav = () => {
  const { setShowSidebar} = useGlobalContext();


  return (
    <ul className="nav-links">
      <li>
        <NavLink
          to="/"
          className="Nav-item"
          onClick={() => setShowSidebar(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="Nav-item"
          onClick={() => setShowSidebar(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className="Nav-item"
          onClick={() => setShowSidebar(false)}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="Nav-item"
          onClick={() => setShowSidebar(false)}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="Nav-item Nav-cart">
          <AiOutlineShoppingCart
            className="cart-icon"
            onClick={() => setShowSidebar(false)}
          />
          <span className="cart-total">10</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
