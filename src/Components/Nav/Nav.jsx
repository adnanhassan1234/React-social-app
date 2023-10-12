import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.module.scss";

const Nav = () => {
  const navItems = [
    { to: "/", icon: "fa fa-home", label: "Home" },
    { to: "/trending", icon: "fa fa-transgender-alt", label: "Trending" },
    { to: "/friends", icon: "fa fa-users", label: "Friends" },
    { to: "/event", icon: "fa fa-calendar-check-o", label: "Event" },
    { to: "/memory", icon: "fa fa-podcast", label: "Memory" },
    { to: "/post", icon: "fa fa-floppy-o", label: "Post" },
  ];

  const socialItems = [
    { to: "/", icon: "fa fa-facebook", label: "Facebook" },
    { to: "/", icon: "fa fa-instagram", label: "Instagram" },
    { to: "/", icon: "fa fa-linkedin", label: "LinkedIn" },
  ];

  return (
    <>
      <nav className="navbar_menu ">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to} activeClassName="active">
                <i className={item.icon} aria-hidden="true"></i>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="my-3">
            <br />
            <h6>PAGES YOU LIKE</h6>
          </li>
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                <i className={item.icon} aria-hidden="true"></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
