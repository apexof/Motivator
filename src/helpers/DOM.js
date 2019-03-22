// import { dn } from "../components/App/sass/global.sass";

export function bodyScroll(val) {
  document.body.style.overflow = val ? "auto" : "hidden";
}

// export function needScroll(elClass, need) {
//   const el = document.getElementsByClassName(elClass)[0];
//   if (need) {
//     if (el.classList.contains(stopScroll)) el.classList.remove(stopScroll);
//   } else if (!need) {
//     if (!el.classList.contains(stopScroll)) el.classList.add(stopScroll);
//   }
// }

export function toggleClass(elClass, toggledClass, need) {
  const el = document.getElementsByClassName(elClass)[0];
  if (need) {
    if (!el.classList.contains(toggledClass)) el.classList.add(toggledClass);
  } else if (!need) {
    if (el.classList.contains(toggledClass)) el.classList.remove(toggledClass);
  }
}
