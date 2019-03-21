import { combineReducers } from "redux";
import financeReducer from "./financeReducer";
import loadingReducer from "./loadingReducer";
import opReducer from "./opReducer";
import dndReducer from "./dndReducer";
import toggleChartsReducer from "./toggleChartsReducer";

const reducer = combineReducers({
  finances: financeReducer,
  loading: loadingReducer,
  operations: opReducer,
  dragEl: dndReducer,
  hiddenCharts: toggleChartsReducer
});

export default reducer;
