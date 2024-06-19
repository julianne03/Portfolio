import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/common/Navbar.css'

const Nav = () => {
  return (
    <nav>
      <div className="menu">
        <div>
            <NavLink to="/">
            Julianne's Portfolio
            </NavLink>
        </div>
        <div>
            <NavLink to="/about">
            About
            </NavLink>
        </div>
        <div>
            <NavLink to="/projects">
            Projects
            </NavLink>
        </div>
        <div>
            <NavLink to="/blog">
            Blog
            </NavLink>
        </div>
      </div>
      <div className="contactBox">
        <NavLink to="/" href="#contact" className="contact">
            Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;