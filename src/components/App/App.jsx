import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import style from "./App.sass";
import Finances from "../Finances";
import { getHeaders } from "../../AC";
import Header from "../Header/Header";
import Loading from "../Loading";
import Charts from "../Charts";
import auth0 from "../Auth/Auth";

const { INCOMES, WALLETS, COSTS } = require("../../../common/constants");

class App extends React.Component {
  async componentDidMount() {
    window.scrollTo(0, 0);
    const { getItems, getOps } = this.props;
    const userName = auth0.isAuth() ? auth0.getUser().name : "demo";
    const dbName = (await axios({
      method: "GET",
      headers: getHeaders(),
      url: `/choose-db/${userName}`
    })).data;

    if (dbName) {
      getItems(INCOMES);
      getItems(WALLETS);
      getItems(COSTS);
      getOps();
    }
  }

  render() {
    return (
      <>
        {this.props.loading && <Loading />}
        <Header />
        <div className={style.content}>
          <div className={style.finances}>
            <Finances type={INCOMES} />
            <Finances type={WALLETS} />
            <Finances type={COSTS} />
          </div>
          <Charts />
        </div>
      </>
    );
  }
}
App.propTypes = {
  loading: PropTypes.bool.isRequired,
  getItems: PropTypes.func.isRequired,
  getOps: PropTypes.func.isRequired
};

export default App;
