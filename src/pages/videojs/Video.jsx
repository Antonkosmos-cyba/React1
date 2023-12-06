import React from "react";
import "./video.css";
import { Vidaka } from "../../components/videoteka/Videoteka";

function Video() {
  return (
    <div className="content">
      <div className="head">
        <p>тут Видео</p>
      </div>
      <div>
        <Vidaka />
      </div>
    </div>
  );
}

export default Video;
