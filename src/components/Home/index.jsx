import React from "react";
import Auth from "./Auth";

function Home() {
  return (
    <div>
      <h1>Главная</h1>
      <a href="/app.html">App</a>
      <Auth />
    </div>
  );
}
export default Home;
