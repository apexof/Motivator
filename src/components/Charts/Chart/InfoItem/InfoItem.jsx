import React from "react";
import PropTypes from "prop-types";
import style from "./InfoItem.sass";

class InfoItem extends React.Component {
  state = { menuOpen: false };

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  };

  render() {
    const { item } = this.props;
    let tags = null;
    if (item.tags.length) {
      tags = item.tags.map(tag => (
        <div key={tag.amount} className={style.tagContainer}>
          <div className={style.tagName}>{tag.tagName}</div>
          <div className={style.tagAmount}>{tag.amount}</div>
        </div>
      ));
    }
    return (
      <>
        <div onClick={tags && this.toggleMenu} className={style.container}>
          <span className={style.color} style={{ background: item.bgcColor }} />
          <div className={style.textContainer}>
            <div className={style.name}>
              {item.name}
              {tags && <span className={this.state.menuOpen ? style.open : style.closed} />}
            </div>
            <div className={style.amount}>{item.amount}</div>
          </div>
        </div>
        <div className={this.state.menuOpen ? style.tagsShow : style.tagsHide}>{tags}</div>
      </>
    );
  }
}

InfoItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    tags: PropTypes.instanceOf(Array).isRequired
  }).isRequired
};
export default InfoItem;
