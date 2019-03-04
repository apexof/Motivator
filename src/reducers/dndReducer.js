import { SET_DRAG_EL } from "../AC";

function dndReducer(dragEl = {}, { type, data }) {
  switch (type) {
    case SET_DRAG_EL:
      return JSON.stringify(data) === JSON.stringify(dragEl) ? dragEl : data;
    default:
      return dragEl;
  }
}

export default dndReducer;
