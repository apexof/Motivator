import React from "react";
import PropTypes from "prop-types";
import { fin } from "../../../text";
import { textTrimmer, moneyFormat, separate } from "../../../helpers";
import style from "./Item.sass";
import colors from "../../App/sass/vars.sass";
import EditItem from "../EditItem";
import DelItem from "../DelItem";

const { WALLETS, COSTS } = require("../../../../constants");

function Item({
  _id,
  type,
  name,
  amount,
  holdWallets,
  plan,
  deleteItem,
  disableItem,
  openListOp,
  funcs,
  color,
  balance
}) {
  const { dragStart, dragOver, drop } = funcs;
  const monthSumm = type === WALLETS ? holdWallets : amount;
  const progress = !plan ? 100 : (monthSumm / plan) * 100;
  const bright = colors[`${type}Bright`];
  const pale = colors[`${type}Pale`];
  const bgc = { background: `linear-gradient(to top, ${bright} ${progress}%, ${pale} ${progress}%)` };
  const fulfilled = type === COSTS ? colors.red : colors.green;
  const planColor = { color: progress >= 100 ? fulfilled : colors.grey };
  return (
    <div className={style.source}>
      <div className={style.roundContainer}>
        <div
          data-type={type}
          className={style.round}
          style={bgc}
          draggable="true"
          onDragOver={dragOver}
          onDragStart={dragStart}
          onDrop={drop}
          onClick={openListOp(_id)}
          title={type === WALLETS && amount === 0 ? fin[type].notDraggable : fin[type].round}
        >
          <p className={style.amount} title={`${fin[type].amount} ${separate(amount)}`}>
            {moneyFormat(amount)}
          </p>
        </div>
        {balance && <div title="Учитывается в общем балансе" className={style.gold} />}
        <DelItem
          sass={style.delButton}
          title={`Удаляя "${name}" вы хотите:`}
          confirmText="Удалить иконку и все операции"
          confirm={() => deleteItem(_id, type)}
          cancelText="Удалить только иконку"
          cancel={() => disableItem(_id, type)}
        />
        <EditItem
          _id={_id}
          name={name}
          plan={plan}
          amount={amount}
          type={type}
          color={color}
          balance={balance}
        />
      </div>
      <p
        title={name}
        className={style.name}
        onDragOver={e => e.preventDefault()}
        spellCheck={false}
      >
        {textTrimmer(name, 12)}
      </p>
      <small
        title={`${fin[type].plan} ${separate(plan)}`}
        style={planColor}
        onDragOver={e => e.preventDefault()}
      >
        {moneyFormat(plan)}
      </small>
    </div>
  );
}

Item.propTypes = {
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  holdWallets: PropTypes.number,
  plan: PropTypes.number,
  deleteItem: PropTypes.func.isRequired,
  disableItem: PropTypes.func.isRequired,
  openListOp: PropTypes.func.isRequired,
  color: PropTypes.string,
  balance: PropTypes.bool,
  funcs: PropTypes.shape({
    dragStart: PropTypes.func.isRequired,
    dragOver: PropTypes.func.isRequired,
    drop: PropTypes.func.isRequired
  }).isRequired
};

Item.defaultProps = {
  plan: null,
  holdWallets: undefined,
  color: undefined,
  balance: undefined
};

export default Item;
