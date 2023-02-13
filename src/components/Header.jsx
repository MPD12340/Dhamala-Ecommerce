import React, { useState } from "react";
import Sidebar from "./Sidebar";

import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/UserContext";

import Nav from "./Nav";

const Header = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <Wrapper className="header">
      <div className="nav-center">
        <NavLink to="/" className="Nav-link--logo">
          Dhamala <span className="last-logo">Ecom</span>
        </NavLink>
        <GiHamburgerMenu
          name="ham-btn"
          className="react-icon-btn"
          onClick={() => setShowSidebar(true)}
        />
        {showSidebar ? <Sidebar /> : <Nav />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header``;

export default Header;
