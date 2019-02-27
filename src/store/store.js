import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import reducer from "../reducers";

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

export default store;
