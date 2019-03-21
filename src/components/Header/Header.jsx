import React from "react";
import PropTypes from "prop-types";
import Balance from "./Balance";
import ChartsToggle from "./ChartsToggle";
import Menu from "./Menu";
import style from "./Header.sass";

function Header({ home }) {
  return (
    <div className={style.header}>
      <Menu />
      {!home && <Balance />}
      {!home && <ChartsToggle />}
    </div>
  );
}

Header.propTypes = { home: PropTypes.bool };
Header.defaultProps = { home: false };
export default Header;
