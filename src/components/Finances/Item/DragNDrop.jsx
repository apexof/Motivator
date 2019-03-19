import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import coin from "./coin.png";

const { INCOMES, WALLETS, COSTS } = require("../../../../common/constants");

function checkValidOp(from, to) {
  const incomeOp = from.type === INCOMES && to.type === WALLETS;
  const internalOp = from.type === WALLETS && to.type === WALLETS && to._id !== from._id;
  const expenseOp = from.type === WALLETS && to.type === COSTS;
  return incomeOp || internalOp || expenseOp;
}

function DragNDrop(props) {
  const { _id, type, openModal, dragEl, setDragEl, name, amount } = props;
  const img = new Image();
  img.src = coin;

  function dragStart(e) {
    e.dataTransfer.setDragImage(img, 17, 17);
    setDragEl({
      _id,
      type,
      name,
      amount
    });
  }

  function dragOver(e) {
    if (checkValidOp(dragEl, { type, _id })) return e.preventDefault();
  }

  function drop(e) {
    const elem = e.target.closest("[data-type]");
    const to = {
      _id,
      type: elem.getAttribute("data-type"),
      name: elem.parentElement.nextElementSibling.title
    };
    if (checkValidOp(dragEl, to)) openModal(dragEl, to);

    setDragEl({});
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
  setDragEl: PropTypes.func.isRequired,
  dragEl: PropTypes.shape({
    _id: PropTypes.string,
    type: PropTypes.string
  }).isRequired
};

DragNDrop.defaultProps = { amount: 0 };

export default DragNDrop;
