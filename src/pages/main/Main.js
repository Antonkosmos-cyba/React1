import "./main.css";

import videon from "./video/nov.mp4";

const Main = () => {
  return (
    <div className="container">
      <div className="title">
        <p>С Новым годом!</p>
        <br /> <p>2024</p>
      </div>
      <div className="text">
        В двери Новый год стучится, Дед Мороз к нам в гости мчится, В небе
        праздничный салют, И часы двенадцать бьют.
        <br />
        Огоньки сверкают ярко. Свечи, шарики, подарки. Скоро сказка в дом
        войдет, Скоро будет Новый год!
      </div>
      <div className="video-blok">
        <video controls>
          <source src={videon} />
        </video>
      </div>
    </div>
  );
};

export default Main;
