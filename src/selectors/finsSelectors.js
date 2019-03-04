import { createSelector } from "reselect";

export const itemsByFinType = ({ finances }, { type }) => finances[type];
const makeGetActiveFins = () => createSelector(
  itemsByFinType,
  items => items.filter(item => !item.disable)
);

export default makeGetActiveFins;
