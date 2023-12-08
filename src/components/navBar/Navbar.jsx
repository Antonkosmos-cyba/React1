import React from "react";
import Main from "../../pages/main/Main.jsx";
import Foto from "../../pages/foto/Foto.jsx";
import Video from "../../pages/videojs/Video.jsx";
import "./navbar.css";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
};

export default Navbar;
