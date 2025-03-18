import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/style.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item " : "pending-item"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item " : "pending-item"
            }
            to="/product/10/Banana"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item " : "pending-item"
            }
            to="/profile/zakaria/khan"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
