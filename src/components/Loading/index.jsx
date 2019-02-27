import React from "react";
import spinner from "./spinner.gif";
import style from "./Loading.sass";

export default function Loading() {
  return <img src={spinner} alt="Загрузка..." className={style.spinner} />;
}
