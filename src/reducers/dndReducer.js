import { START_DND } from "../AC";

function dndReducer(dragEl = {}, { type, data }) {
  switch (type) {
    case START_DND:
      return data;
    default:
      return dragEl;
  }
}

export default dndReducer;
