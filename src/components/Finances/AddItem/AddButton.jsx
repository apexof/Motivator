import React from "react";
import PropTypes from "prop-types";
import style from "./AddItem.sass";
import plus from "./plus.png";
import { touchDevice } from "../../../helpers";

function AddButton({ openModal }) {
  return (
    <div className={style.source}>
      <div className={style.round} onClick={openModal}>
        <img
          className={style.addImg}
          src={plus}
          alt="Добавить"
          draggable={touchDevice() ? undefined : false}
        />
      </div>
      <div>Добавить</div>
    </div>
  );
}

AddButton.propTypes = { openModal: PropTypes.func.isRequired };

export default AddButton;
