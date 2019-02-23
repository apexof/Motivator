import React from "react";
import Balance from "./Balance";

import style from "./Header.sass";

function Header() {
  return (
    <div className={style.header}>
      <Balance />
    </div>
  );
}

export default Header;
