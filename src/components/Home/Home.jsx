import React from "react";
// import motivator from "./motivator.png";
import tree from "./money-tree.png";
import style from "./Home.sass";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header home />
      <div>
        <h1 className={style.header}>MOTIVATOR</h1>
        <h2>Веб-сервис для учета личных финансов</h2>
        {/* <img className={style.cat} src={motivator} alt="Кошка-копилка" /> */}
        <div className={style.video}>
          <iframe
            title="Видео"
            width={style.videoWidth}
            height="315"
            src="https://www.youtube.com/embed/M1iXOfEhBOI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className={style.footer}>
        <p>Связаться с автором</p>
        <p>Поблагодарить</p>
      </div>
      <div className={style.tree1} />
      <div className={style.tree2} />
      <div className={style.tree3} />
    </>
  );
}

export default Home;
