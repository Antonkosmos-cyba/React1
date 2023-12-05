import React from "react";
import "./video.css";
import { Vidaka } from "../../components/videoteka/Videoteka";

function Video() {
  return (
    <div className="content">
      <div className="video">
        <p>тут Видео</p>
      </div>
      <Vidaka />
    </div>
  );
}

export default Video;
