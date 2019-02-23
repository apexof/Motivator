import { createSelector } from "reselect";

const getItems = items => items;
const makeGetActiveFins = () => createSelector(
  [() => null, getItems],
  (filter, items) => items.filter(item => !item.disable)
);

export default makeGetActiveFins;
