import React from "react";
import PropTypes from "prop-types";
import style from "./sass/global.sass";
import Finances from "../Finances";
import Header from "../Header";
import Charts from "../Charts";
import spinner from "./spinner.gif";

const { INCOMES, WALLETS, COSTS } = require("../../../constants");

function App({ loading }) {
  return (
    <>
      {loading && <img src={spinner} alt="Загрузка..." className={style.spinner} />}
      <Header />
      <div className={style.finances}>
        <div>
          <Finances type={INCOMES} />
          <Finances type={WALLETS} />
          <Finances type={COSTS} />
        </div>
        <Charts />
      </div>
    </>
  );
}
App.propTypes = { loading: PropTypes.bool.isRequired };

export default App;
