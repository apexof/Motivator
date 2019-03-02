import { createSelector } from "reselect";

export const itemsByFinType = (state, props) => state.finances[props.type];
const makeGetActiveFins = () => createSelector(
  itemsByFinType,
  items => items.filter(item => !item.disable)
);

export default makeGetActiveFins;
