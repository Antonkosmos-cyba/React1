import React from "react";
import "./videoteka.css";

const elements = [
  {
    id: 1,
    vid: require("./video/nov.mp4"),
    title: "nov",
  },
  {
    id: 2,
    vid: require("./video/nov2.mp4"),
    title: "puv",
  },
  {
    id: 3,
    vid: require("./video/nov3.mp4"),
    title: "nuv",
  },
];

export function Vidaka() {
  return (
    <>
      <div className="elements">
        {elements.map((element) => {
          return (
            <div key={element.id} className="card">
              <video
                src={element.vid}
                controls
                max-width={400}
                height={200}
              ></video>
              <p className="title-card">{element.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
