import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../../../CheckBox";
import { fin, WALLETS } from "../../../../text";
import { star } from "../../../App/sass/global.sass";
import style from "../AddItem.sass";

function WindowContent({ addItem, closeModal, type }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addItem(formData, type);
    closeModal();
  };
  const isWallets = type === WALLETS;
  return (
    <>
      <h2>{fin[type].addWindowTitle}</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <p>
          <span className={star}>* </span>Название:
        </p>
        <input type="text" name="name" autoFocus required />

        <p>{fin[type].plan}</p>
        <input type="number" step="0.01" min="0" name="plan" />
        <input type="hidden" name="model" value={type} />

        {isWallets && (
          <div>
            <p>
              <span className={star}>* </span>
              {fin[type].amount}
            </p>
            <input type="number" step="0.01" min="0" name="amount" required />
            <div className={style.balance}>
              <Checkbox name="balance" />
              <span>Учитывыть в общем балансе</span>
            </div>
          </div>
        )}

        <br />
        <button type="submit">Создать</button>
      </form>
    </>
  );
}

WindowContent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default WindowContent;
