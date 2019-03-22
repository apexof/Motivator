import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "./Breadcrumbs";
import DatePicker from "./DataPicker/DatePicker";
import { star } from "../../App/sass/global.sass";
import style from "./MakeOp.sass";

const { WALLETS } = require("../../../../common/constants");

function AddOp({ from, to, closeModal, makeOp, amountOp, opId, tag, date }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    makeOp(formData);
    closeModal();
  };
  return (
    <div>
      <h2>{amountOp ? "Редактирование денежной операции" : "Создание денежной операции"}</h2>
      <Breadcrumbs from={from} to={to} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={style.container}>
          {opId && <input type="hidden" name="_id" value={opId} />}
          <input type="hidden" name="from_id" value={from._id} />
          <input type="hidden" name="to_id" value={to._id} />
          <input type="hidden" name="from_type" value={from.type} />
          <input type="hidden" name="to_type" value={to.type} />
          <div className={style.fields}>
            <p>
              <span className={star}>* </span>Сумма операции:
            </p>
            <input
              type="number"
              step="0.01"
              name="amount"
              defaultValue={amountOp}
              min="0.01"
              max={
                from.type === WALLETS && from.amount > 0 ? from.amount + (amountOp || 0) : undefined
              }
              autoFocus
              required
            />
            <p>Тэг:</p>
            <input type="text" name="tag" defaultValue={tag} />
            <DatePicker date={date} />
          </div>
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

AddOp.propTypes = {
  opId: PropTypes.string,
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
  makeOp: PropTypes.func.isRequired,
  amountOp: PropTypes.number,
  tag: PropTypes.string,
  date: PropTypes.instanceOf(Date)
};

AddOp.defaultProps = {
  amountOp: undefined,
  opId: undefined,
  tag: undefined,
  date: undefined
};

export default AddOp;
