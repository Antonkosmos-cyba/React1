import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/Foto">Фото</Link>
          </li>
          <li>
            <Link to="/Video">Видео</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
