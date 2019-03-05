import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import { fin } from "../../../text";
import AddItem from "../AddItem";
import style from "./List.sass";

function List({ type, items }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{fin[type].title}</h2>
      {items.map(item => (
        <Item
          key={item._id}
          _id={item._id}
          type={type}
          name={item.name}
          amount={item.amount}
          plan={item.plan}
          color={item.color}
          balance={item.balance}
        />
      ))}
      <AddItem type={type} />
    </div>
  );
}
List.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array)
};

List.defaultProps = { items: [] };

export default List;
