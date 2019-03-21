export function bodyScroll(val) {
  document.body.style.overflow = val ? "auto" : "hidden";
}
export function rootScroll(val) {
  const el = document.getElementById("root");
  el.style.overflow = val ? "auto" : "hidden";
}
export function needScroll(elClass, val) {
  const el = document.getElementsByClassName(elClass)[0];
  el.style.overflow = val ? "auto" : "hidden";
}
