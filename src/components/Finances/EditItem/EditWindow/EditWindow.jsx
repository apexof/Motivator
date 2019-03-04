import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "../../ColorPicker";
import style from "./EditWindow.sass";
import { fin, WALLETS } from "../../../../text";
import { star } from "../../../App/sass/global.sass";

function EditWindow({ _id, name, plan, amount, type, editItem, closeModal, color }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    editItem(formData, type);
    closeModal();
  };
  const isWallets = type === WALLETS;
  return (
    <>
      <h2>{fin[type].editWindowTitle}</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={style.container}>
          <div>
            <input type="hidden" name="_id" value={_id} />
            <p>
              <span className={star}>* </span>Название:
            </p>
            <input type="text" name="name" defaultValue={name} autoFocus required />

            <p>{fin[type].plan}</p>
            <input type="number" step="0.01" min="0" name="plan" defaultValue={plan} />

            {isWallets && (
              <>
                <p>
                  <span className={star}>* </span>
                  {fin[type].amount}
                </p>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  name="amount"
                  defaultValue={amount}
                  required
                />
              </>
            )}
          </div>
          {!isWallets && <ColorPicker color={color} />}
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </>
  );
}

EditWindow.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  plan: PropTypes.number,
  amount: PropTypes.number,
  type: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  color: PropTypes.string
};

EditWindow.defaultProps = {
  plan: 0,
  amount: null,
  color: null
};

export default EditWindow;
