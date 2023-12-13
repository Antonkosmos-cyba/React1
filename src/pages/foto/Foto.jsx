import React from "react";
import "./foto.css";
import { Fototelka } from "../../components/fototelka/Fototelka";

const Foto = () => {
  return (
    <div className="content">
      <div className="head">
        <h5>С праздником!</h5>
      </div>
      <div>
        <Fototelka />
      </div>
    </div>
  );
};

export default Foto;
