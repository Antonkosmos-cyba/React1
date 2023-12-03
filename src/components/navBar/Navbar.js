import React from "react";
import Main from "../../pages/main/Main.js";
import Foto from "../../pages/foto/Foto.js";
import Video from "../../pages/videojs/Video.js";
import "./navbar.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="man">
      <h1>anton</h1>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/foto">Фото</NavLink>
          </li>
          <li>
            <NavLink to="/video">Видео</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
};

export default Navbar;
