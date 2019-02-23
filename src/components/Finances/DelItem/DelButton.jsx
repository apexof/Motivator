import React from "react";
import PropTypes from "prop-types";
import style from "./DelButton.sass";

function DelButton({ openModal, sass }) {
  return (
    <span title="Удалить" className={`${style.delButton} ${sass}`} onClick={openModal}>
      ×
    </span>
  );
}

DelButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  sass: PropTypes.string
};

DelButton.defaultProps = { sass: null };

export default DelButton;
