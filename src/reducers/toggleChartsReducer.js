import { CHANGE_VISIBILITY } from "../AC";
import { isMobile, toggleClass } from "../helpers";
import { finances } from "../components/App/App.sass";
import { dn } from "../components/App/sass/global.sass";

function toggleChartsReducer(hiddenCharts = isMobile(), action) {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      if (isMobile() && hiddenCharts) toggleClass(finances, dn, true);
      if (isMobile() && !hiddenCharts) toggleClass(finances, dn, false);
      if (!isMobile()) toggleClass(finances, dn, false);
      return !hiddenCharts;
    default:
      return hiddenCharts;
  }
}

export default toggleChartsReducer;
