import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../../Auth";
import Balance from "./Balance";
import style from "./Header.sass";

function Header(props) {
  console.log("props: ", props);
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };
  return (
    <div className={style.header}>
      <Link to="/">Главная</Link>
      {!auth0Client.isAuthenticated() && (
        <button type="button" onClick={auth0Client.signIn}>
          Sign In
        </button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <label>{auth0Client.getProfile().name}</label>
          <button
            type="button"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
      <Balance />
    </div>
  );
}

export default withRouter(Header);
