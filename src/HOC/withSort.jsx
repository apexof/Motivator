import React from "react";
import PropTypes from "prop-types";

const sorter = {
  str: {
    asc: (a, b) => a.name.localeCompare(b.name),
    desc: (a, b) => b.name.localeCompare(a.name)
  },
  num: {
    asc: (a, b) => a.amount - b.amount,
    desc: (a, b) => b.amount - a.amount
  }
};

export default Component => class withSort extends React.Component {
    static propTypes = { unSortedData: PropTypes.instanceOf(Array).isRequired };

    state = { data: [], sort: null };

    static getDerivedStateFromProps({ unSortedData }) {
      console.log("getDerivedStateFromProps");
      return { data: unSortedData.sort(sorter.str.asc), sort: "asc" };
    }

    sort = type => () => {
      this.setState(({ data, sort }) => (sort === "asc"
        ? {
          data: data.sort(sorter[type].desc),
          sort: "desc"
        }
        : {
          data: data.sort(sorter[type].asc),
          sort: "asc"
        }));
    };

    render() {
      return <Component {...this.props} sortedData={this.state.data} sort={this.sort} />;
    }
};
