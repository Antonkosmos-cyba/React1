import React from "react";
import Main from "./pages/main/Main.jsx";
import Foto from "./pages/foto/Foto.jsx";
import Video from "./pages/videojs/Video.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/foto" element={<Foto />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
