import React from "react";
import "./fototelka.css";

const elements = [
  {
    id: 1,
    fot: require("./foto/nov.jpg"),
    title: " Из камина дед Мороз, ",
  },
  {
    id: 2,
    fot: require("./foto/nov2.jpg"),
    title: "Вам печеньки всем принес!",
  },
  {
    id: 3,
    fot: require("./foto/nov3.jpg"),
    title: "Кушайте на здоровье!",
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
              <p className="title-card">{element.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
