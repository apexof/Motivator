import vars from "../components/App/sass/vars.sass";

export function isMobile() {
  return screen.width < parseInt(vars.chartsBP, 10);
}
