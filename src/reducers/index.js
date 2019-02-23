import { combineReducers } from "redux";
import financeReducer from "./financeReducer";
import loadingReducer from "./loadingReducer";
import opReducer from "./opReducer";
import dndReducer from "./dndReducer";

const reducer = combineReducers({
  finances: financeReducer,
  loading: loadingReducer,
  operations: opReducer,
  dragEl: dndReducer
});

export default reducer;
