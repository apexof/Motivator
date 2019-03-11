import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import auth0 from "../Auth/Auth";
import Balance from "./Balance";
import style from "./Header.sass";

function Header({ home }) {
  const { isAuth, signIn, signOut, getUser } = auth0;
  return (
    <div className={style.header}>
      {!isAuth() && (
        <div>
          <div className={style.sign} onClick={signIn}>
            Вход/регистрация
          </div>
          <Link to="/demo" className={style.demo}>
            Демо-аккаунт
          </Link>
        </div>
      )}
      {isAuth() && (
        <div>
          <div className={style.sign} onClick={() => signOut()}>
            Выйти
          </div>
          <label>{getUser().name}</label>
        </div>
      )}
      {!home && <Balance />}
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired,
  home: PropTypes.bool
};
Header.defaultProps = { home: false };
export default withRouter(Header);
