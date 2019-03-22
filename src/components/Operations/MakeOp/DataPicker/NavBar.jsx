import React from "react";
import style from "./Navbar.sass";

function Navbar({ onPreviousClick, onNextClick, className }) {
  return (
    <div className={className}>
      <div
        tabIndex="0"
        className="DayPicker-NavButton DayPicker-NavButton--prev"
        onClick={() => onPreviousClick()}
      />

      <div
        tabIndex="0"
        className="DayPicker-NavButton DayPicker-NavButton--next"
        onClick={() => onNextClick()}
      />
    </div>
  );
}

export default Navbar;
