import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navBar/Navbar.jsx";
// import Footer from "./components/footer/Footer.js";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
