import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-section">
        <div className="info">
          <p className="welcome">Welcome to </p>
          <h2 className="welcome-name">Dhamala Store </h2>
          <p className="description">
            This is the one and only most famous ecommerce store ever built in
            Nepal. We are known for our quality products and our assurance to
            maintain quality till eternity.
          </p>
        </div>

        <NavLink to="/products" className = "shop-btn">Shop now</NavLink>
      </div>
      <div className="right-section">
        <div className="images-container">
          <img
            src="/images/shop-1.jpeg"
            alt="shopping couple"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
