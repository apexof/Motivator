import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "./Breadcrumbs";
import DatePicker from "./DataPicker/DatePicker";
import { star } from "../../App/sass/global.sass";
import style from "./AddOp.sass";

const { WALLETS } = require("../../../../constants");

function AddOp({ from, to, closeModal, addOp }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addOp(formData);
    closeModal();
  };
  return (
    <div>
      <h2>Создание денежной операции</h2>
      <Breadcrumbs from={from} to={to} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={style.container}>
          <input type="hidden" name="from_id" value={from._id} />
          <input type="hidden" name="to_id" value={to._id} />
          <input type="hidden" name="from_type" value={from.type} />
          <input type="hidden" name="to_type" value={to.type} />
          <div>
            <p>
              <span className={star}>* </span>Сумма операции:
            </p>
            <input
              type="number"
              step="0.01"
              name="amount"
              min="0.01"
              max={from.type === WALLETS && from.amount > 0 ? from.amount : undefined}
              autoFocus
              required
            />
            <p>Тэг:</p>
            <input type="text" name="tag" />
          </div>

          <DatePicker />
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

AddOp.propTypes = {
  from: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number
  }).isRequired,
  to: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  addOp: PropTypes.func.isRequired
};

export default AddOp;
