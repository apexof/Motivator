import React from "react";
import { star } from "../../App/sass/global.sass";

export default function AuthWindow() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <p>
          <span className={star}>* </span>Электронная почта:
        </p>
        <input type="email" name="email" autoFocus required />
        <p>
          <span className={star}>* </span>Пароль:
        </p>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
