import React from "react";
import style from "./Navbar.sass";

function Navbar({ onPreviousClick, onNextClick, className }) {
  return (
    <div className={className}>
      <div
        className={`DayPicker-NavButton DayPicker-NavButton--prev ${style.button}`}
        onClick={() => onPreviousClick()}
      />

      <div
        className={`DayPicker-NavButton DayPicker-NavButton--next ${style.button}`}
        onClick={() => onNextClick()}
      />
    </div>
  );
}

export default Navbar;
