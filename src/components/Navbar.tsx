import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/common/Navbar.css'

const Nav = () => {
  return (
    <nav>
      <div className="menu">
        <div>
            <NavLink to="/" className="menuLink">
            Julianne's Portfolio
            </NavLink>
        </div>
        <div>
            <NavLink to="/about" className="menuLink">
            About
            </NavLink>
        </div>
        <div>
            <NavLink to="/projects" className="menuLink">
            Projects
            </NavLink>
        </div>
        <div>
            <NavLink to="/blog" className="menuLink">
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