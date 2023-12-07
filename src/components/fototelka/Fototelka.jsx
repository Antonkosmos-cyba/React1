import React from "react";
import "./fototelka.css";

const elements = [
  {
    id: 1,
    fot: require("./foto/nov.jpg"),
    title: "alala",
  },
  {
    id: 2,
    fot: require("./foto/nov2.jpg"),
    title: "puv",
  },
  {
    id: 3,
    fot: require("./foto/nov3.jpg"),
    title: "nuv",
  },
];

export function Fototelka() {
  return (
    <>
      <div className="elements">
        {elements.map((element) => {
          return (
            <div key={element.id} className="card">
              <img src={element.fot} alt="" max-width={400} height={200}></img>
              <h1>{element.title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
