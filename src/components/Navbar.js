import React, { useContext } from "react";
import { Link } from "react-router-dom";
import links from "../constants/NavLinks";
import Log from "./Log";
import { UserContext } from "../UserContext";
const Navbar = () => {
  const { handleCloseSidebar, handleOpenSidebar } = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-links">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.url}
                className="nav-link"
                onClick={handleCloseSidebar}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <button className="nav-toggle" onClick={handleOpenSidebar}>
          toggle nav
        </button>
        <div className="nav-logo">
          <Link to="/">
            <h6>foodie</h6>
          </Link>
        </div>
        <Log></Log>
      </div>
    </nav>
  );
};

export default Navbar;
