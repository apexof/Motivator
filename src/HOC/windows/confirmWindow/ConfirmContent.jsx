import React from "react";
import PropTypes from "prop-types";
import style from "./ConfirmContent.sass";

function ConfirmContent({ title, confirmText, confirm, cancelText, cancel }) {
  return (
    <>
      <div className={style.title}>{title}</div>
      <form className={style.buttons}>
        <button className={style.firstButton} onClick={confirm} type="button">
          {confirmText}
        </button>
        <button type="button" onClick={cancel}>
          {cancelText}
        </button>
      </form>
    </>
  );
}

ConfirmContent.propTypes = {
  title: PropTypes.string,
  confirmText: PropTypes.string,
  confirm: PropTypes.func.isRequired,
  cancelText: PropTypes.string,
  cancel: PropTypes.func.isRequired
};
ConfirmContent.defaultProps = {
  title: "Вы уверены?",
  confirmText: "Да",
  cancelText: "Нет"
};

export default ConfirmContent;
