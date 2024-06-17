import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/common/Navbar.css'

const Nav = () => {
  return (
    <nav>
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
      <div>
        <NavLink to="/">
            <a className="contact" href="#contact">Contact</a>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;