import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="man">
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/foto">Фото</Link>
          </li>
          <li>
            <Link to="/video">Видео</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
