import React from "react";
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
        <nav className={style.contacts}>
          <p>
            <a className={style.navEl} href="https://vk.com/me6490490">
              Связаться с автором
            </a>
          </p>
          <p>
            <span className={style.navEl}>Поблагодарить</span>
          </p>
        </nav>
      </div>
    </>
  );
}

export default Home;
