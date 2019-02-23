import React from "react";
import PropTypes from "prop-types";
import pen from "./pen.png";
import style from "../Item/Item.sass";

function EditButton({ openModal }) {
  return (
    <img
      src={pen}
      alt="Редактировать"
      className={style.pen}
      onClick={openModal}
      title="Редактировать"
      draggable={false}
    />
  );
}

EditButton.propTypes = { openModal: PropTypes.func.isRequired };

export default EditButton;
