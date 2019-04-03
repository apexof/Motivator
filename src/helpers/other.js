import vars from "../components/App/sass/vars.sass";

export function isMobile() {
  return screen.width < parseInt(vars.chartsBP, 10);
}

export function touchDevice() {
  return "ontouchstart" in document.documentElement;
}

export function vibrate(val) {
  try {
    if ("vibrate" in navigator) return navigator.vibrate(val);
    if ("oVibrate" in navigator) return navigator.oVibrate(val);
    if ("mozVibrate" in navigator) return navigator.mozVibrate(val);
    if ("webkitVibrate" in navigator) return navigator.webkitVibrate(val);
  } catch (err) {
    alert(err);
  }
  console.log("нету вибро");
}
