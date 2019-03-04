import React from "react";
import PropTypes from "prop-types";
import { compareArrOfObj } from "../helpers";

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

    state = { data: this.props.unSortedData.sort(sorter.str.asc), sort: "asc" };

    // componentDidUpdate(prevProps) {
    //   // console.log("prevProps", prevProps.unSortedData);
    //   // console.log("this.props", this.props.unSortedData);
    //   if (this.props.unSortedData !== prevProps.unSortedData) {
    //     this.setState = { data: this.props.unSortedData.sort(sorter.str.asc), sort: "asc" };
    //   }
    // }

    // static getDerivedStateFromProps() {
    //   // console.log("getDerivedStateFromProps");
    // }

    shouldComponentUpdate(nextProps) {
      console.log("shouldComponentUpdate");
      // console.log("nextProps.unSortedData", nextProps.unSortedData);
      // console.log("this.props.unSortedData", this.props.unSortedData);
      console.log(compareArrOfObj(nextProps.unSortedData, this.props.unSortedData));
      // console.log("nextProps", nextProps);
      // console.log("this.props", this.props);
      return true;
    }

    sort = type => () => {
      // console.log("sort");
      // console.log(this.state);
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
      // console.log("render");
      return <Component {...this.props} sortedData={this.state.data} sort={this.sort} />;
    }
};
