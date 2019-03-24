import React from "react";
import PropTypes from "prop-types";
import pen from "./pen.png";
import style from "../Item/Item.sass";
import { touchDevice } from "../../../helpers";

function EditButton({ openModal, sass }) {
  return (
    <img
      src={pen}
      alt="Редактировать"
      className={`${style.pen} ${sass}`}
      onClick={openModal}
      title="Редактировать"
      draggable={touchDevice() ? undefined : false}
    />
  );
}

EditButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  sass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};
// EditButton.defaultProps = { sass: undefined };

export default EditButton;
