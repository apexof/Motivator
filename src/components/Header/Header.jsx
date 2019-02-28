import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import auth0 from "../Auth/Auth";
import Balance from "./Balance";
import style from "./Header.sass";

function Header() {
  const { isAuth, signIn, signOut, getUser } = auth0;
  return (
    <div className={style.header}>
      {!isAuth() && (
        <div>
          <div className={style.sign} onClick={signIn}>
            Войти
          </div>
          <label className={style.demo}>Демо-аккаунт</label>
        </div>
      )}
      {isAuth() && (
        <div>
          <div className={style.sign} onClick={signOut}>
            Выйти
          </div>
          <label>{getUser().name}</label>
        </div>
      )}
      <Balance />
    </div>
  );
}

Header.propTypes = { history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired };

export default withRouter(Header);
