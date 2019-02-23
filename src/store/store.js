import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import { getItems, getOps } from "../AC";

import reducer from "../reducers";

const { INCOMES, WALLETS, COSTS } = require("../../constants");

const state = {
  finances: {
    incomes: [],
    wallets: [],
    costs: []
  },
  loading: false,
  operations: [],
  dragEl: {}
};
const store = createStore(reducer, state, applyMiddleware(apiMiddleware));

store.dispatch(getItems(INCOMES));
store.dispatch(getItems(WALLETS));
store.dispatch(getItems(COSTS));
store.dispatch(getOps());

export default store;
