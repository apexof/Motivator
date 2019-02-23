import { createSelector } from "reselect";

const getItems = items => items;

const makeNotEmptyFin = () => createSelector(
  [() => null, getItems],
  (filter, items) => items.filter(item => item.amount > 0)
);

export default makeNotEmptyFin;
