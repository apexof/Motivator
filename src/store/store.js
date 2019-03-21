import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import reducer from "../reducers";
import { isMobile } from "../helpers";

const state = {
  finances: {
    incomes: [],
    wallets: [],
    costs: []
  },
  loading: false,
  operations: [],
  dragEl: {},
  hiddenCharts: isMobile()
};
const store = createStore(reducer, state, applyMiddleware(apiMiddleware));

export default store;
