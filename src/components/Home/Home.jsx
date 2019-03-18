import React from "react";
import style from "./Home.sass";
import Header from "../Header/Header";
import Thank from "./Thank";

function Home() {
  return (
    <div className={style.container}>
      <Header home />
      <div className={style.content}>
        <h1>MOTIVATOR</h1>
        <h2>Веб-сервис для учета личных финансов</h2>
        <div className={style.video}>
          <iframe
            title="Видео"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QSTPRGBx6_E"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className={style.learnVideo}>
          Посмотрите видео чтобы узнать тонкости использования сервиса
        </p>
        <h3>Зачем вести учет финансов?</h3>
        <p className={style.why}>
          Систематическая запись всех расходов и доходов позволит провести анализ и выяснить куда
          "исчезают" деньги и на чем можно сэкономить. Вы по другому начнете относится к деньгам, у
          вас появится мотивация больше откладывать и меньше тратить.
        </p>
      </div>
      <div className={style.footer}>
        <nav className={style.contacts}>
          <p>
            <a className={style.navEl} href="https://vk.com/me6490490">
              Связаться с автором
            </a>
          </p>
          <Thank />
        </nav>
      </div>
    </div>
  );
}

export default Home;
