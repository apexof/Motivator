import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import menu_icon from "./menu_icon.png";
import style from "./Menu.sass";
import auth0 from "../../Auth/Auth";
import { textTrimmer } from "../../../helpers";

class Menu extends Component {
  state = { hidden: true };

  componentDidMount() {
    document.body.addEventListener("click", this.hideMenu);
  }

  hideMenu = () => {
    if (!this.state.hidden) this.setState({ hidden: true });
  };

  toggleMenu = () => {
    this.setState(state => ({ hidden: !state.hidden }));
  };

  render() {
    console.log("ren");
    const { isAuth, signIn, signOut, getUser } = auth0;
    const path = this.props.location.pathname;
    return (
      <div className={style.menuContainer}>
        <div className={style.menuBlock} onClick={this.toggleMenu}>
          <img className={style.menuButton} src={menu_icon} alt="menu" />
          {isAuth() && (
            <label
              title={getUser().name}
              className={`${style.userName} ${path === "/app" && style.dn}`}
            >
              {textTrimmer(getUser().name, 12)}
            </label>
          )}
          {!isAuth() && path === "/demo" && <label className={style.demo}>Демо-аккаунт</label>}
        </div>

        <div className={`${style.menuList} ${!this.state.hidden && style.menuShow}`}>
          <NavLink exact to="/" className={style.menuEl} activeClassName={style.activeEL}>
            Главная
          </NavLink>
          <NavLink exact to="/app" className={style.menuEl} activeClassName={style.activeEL}>
            Учет финансов
          </NavLink>

          {!isAuth() && (
            <NavLink exact to="/demo" className={style.menuEl} activeClassName={style.activeEL}>
              Демо-аккаунт
            </NavLink>
          )}
          {!isAuth() && (
            <div className={style.menuEl} onClick={signIn}>
              Вход/регистрация
            </div>
          )}
          {isAuth() && (
            <div className={style.menuEl} onClick={() => signOut()}>
              Выйти
            </div>
          )}
        </div>
      </div>
    );
  }
}
Menu.propTypes = { location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired };
export default withRouter(Menu);
