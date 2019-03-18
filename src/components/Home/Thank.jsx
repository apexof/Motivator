import React from "react";
import PropTypes from "prop-types";
import coinWindow from "../../HOC/windows/coinWindow";
import style from "./Home.sass";

function ThankComponent() {
  return (
    <>
      <h2 className={style.thankHeader}>Поблагодарить</h2>
      <div>
        <b>BTC:</b> 1KrnqDafarN57BqV2BYpXRqc2ARtQqMdaN
      </div>
      <div>
        <b>Ether:</b> 0x074306F135877c432d15b3D29d7086fF46EC0622
      </div>
      <div>
        <b>Сбер.Банк:</b> 2202 2009 6574 3311
      </div>
      <div>
        <b>Pay Pal:</b> take.money.my@gmail.com
      </div>
    </>
  );
}

function ThankButton({ openModal }) {
  return (
    <p>
      <span onClick={openModal} className={style.navEl}>
        Поблагодарить
      </span>
    </p>
  );
}

ThankButton.propTypes = { openModal: PropTypes.func.isRequired };

export default coinWindow(ThankButton, ThankComponent);
