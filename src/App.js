import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navBar/Navbar.js";
// import Footer from "./components/footer/Footer.js";

import "./css/index.css";

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
