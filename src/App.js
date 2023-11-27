import React from "react";
import Navbar from "./components/navBar/Navbar.js";
import Main from "./pages/main/Main.js";
import Foto from "./pages/foto/Foto.js";
import Video from "./pages/video/Video.js";
import Footer from "./components/footer/footer.js";
import { Route, Routes } from "react-router-dom";
import "./css/index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={Main} />
        <Route path="/foto" element={Foto} />
        <Route path="/video" element={Video} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
