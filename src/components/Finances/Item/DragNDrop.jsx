import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const { INCOMES, WALLETS, COSTS } = require("../../../../constants");

function DragNDrop(props) {
  const { _id, type, openModal, dragEl, startDnd, name, amount } = props;
  function dragStart(e) {
    if (type === COSTS || (amount <= 0 && type === WALLETS)) e.preventDefault();
    startDnd({
      _id,
      type,
      name,
      amount
    });
  }

  function dragOver(e) {
    if (dragEl.type === INCOMES && type === WALLETS) e.preventDefault();
    if (dragEl.type === WALLETS && type === COSTS) e.preventDefault();
    if (dragEl.type === WALLETS && type === WALLETS && _id !== dragEl._id) e.preventDefault();
  }

  function drop(e) {
    const elem = e.target.closest("[data-type]");
    const to = {
      _id,
      type: elem.getAttribute("data-type"),
      name: elem.parentElement.nextElementSibling.title
    };
    openModal(dragEl, to);
    e.dataTransfer.clearData();
  }
  const funcs = {
    dragStart,
    dragOver,
    drop
  };
  return <Item {...props} funcs={funcs} />;
}
DragNDrop.propTypes = {
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  openModal: PropTypes.func.isRequired,
  startDnd: PropTypes.func.isRequired,
  dragEl: PropTypes.shape({
    _id: PropTypes.string,
    type: PropTypes.string
  }).isRequired
};

DragNDrop.defaultProps = { amount: 0 };

export default DragNDrop;
