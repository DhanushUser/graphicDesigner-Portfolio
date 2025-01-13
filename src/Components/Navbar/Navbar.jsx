import React, { useState } from "react";
import "./nav.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false); 
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="navbar">
      <ul className={menu ? "list active" : "list"}>
        <li
          onClick={() => setActive("Home")}
          className={active === "Home" ? "nav-bg" : ""}
        >
          <a href="#hero">Home</a>
        </li>
        <li
          onClick={() => setActive("About")}
          className={active === "About" ? "nav-bg" : ""}
        >
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => setActive("Works")}
          className={active === "Works" ? "nav-bg" : ""}
        >
          <a href="#social">Works</a>
        </li>
        <li
          onClick={() => setActive("Contact")}
          className={active === "Contact" ? "nav-bg" : ""}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Menu Icon */}
      <div
        onClick={toggleMenu}
        className="menu-icon"
        aria-expanded={menu} 
      >
        <i className={menu ? "bx bx-x text-xl" : "bx bx-menu text-xl"}></i>
      </div>
    </div>
  );
};

export default Navbar;
