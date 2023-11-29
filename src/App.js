import React from "react";
import Navbar from "./components/navBar/Navbar.js";
import Main from "./pages/main/Main.js";
import Foto from "./pages/foto/Foto.js";
import Video from "./pages/video/Video.js";
import Footer from "./components/footer/Footer.js";

import { BrowserRouter } from "react-router-dom";
import "./css/index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
