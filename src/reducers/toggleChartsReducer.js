import { CHANGE_VISIBILITY } from "../AC";
import { isMobile, rootScroll } from "../helpers";

function toggleChartsReducer(hiddenCharts = isMobile(), action) {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      if (isMobile() && hiddenCharts) rootScroll(false);
      if (isMobile() && !hiddenCharts) rootScroll(true);
      if (!isMobile()) rootScroll(true);
      return !hiddenCharts;
    default:
      return hiddenCharts;
  }
}

export default toggleChartsReducer;
