import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import links from "../constants/NavLinks";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { sidebarOpen, handleCloseSidebar } = useContext(UserContext);

  return (
    <section className={sidebarOpen ? "sidebar " : "sidebar sidebar-close"}>
      <button type="button" onClick={handleCloseSidebar}>
        close navbar
      </button>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.url}
            className="sidebar-link"
            onClick={handleCloseSidebar}
          >
            {link.text}
          </Link>
        );
      })}
    </section>
  );
};

export default Sidebar;
