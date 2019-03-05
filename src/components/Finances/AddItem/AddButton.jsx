import React from "react";
import PropTypes from "prop-types";
import style from "./AddItem.sass";
import plus from "./plus.png";

function AddButton({ openModal }) {
  return (
    <div className={style.source}>
      <div className={style.round} onClick={openModal}>
        <img draggable="false" src={plus} alt="Добавить" />
      </div>
      <div>Добавить</div>
    </div>
  );
}

AddButton.propTypes = { openModal: PropTypes.func.isRequired };

export default AddButton;
