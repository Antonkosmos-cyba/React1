import React from "react";

import "./navbar.css";
// import { NavLink } from "react-router-dom";
import { CustLink } from "../Customlink.jsx";
import Sneg from "./favicon.ico";

const Navbar = () => {
  return (
    <div className="man">
      <img className="logo" src={Sneg} alt="" max-width={50} height={50}></img>
      <nav>
        <ul className="menu">
          <li>
            <CustLink to="/" className="no-underline">
              Главная
            </CustLink>
          </li>
          <li>
            <CustLink to="/foto" className="no-underline">
              Фото
            </CustLink>
          </li>
          <li>
            <CustLink to="/video" className="no-underline">
              Видео
            </CustLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
