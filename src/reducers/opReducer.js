import { ADD_OP, GET_OPS, DELETE_OP, DELETE_ITEM } from "../AC";

function opReducer(operations = [], { type, payload: data }) {
  switch (type) {
    case GET_OPS: {
      return data;
    }
    case ADD_OP: {
      const newOps = operations.concat(data.newOp);
      newOps.sort((a, b) => new Date(b.date) - new Date(a.date));
      return newOps;
    }
    case DELETE_OP: {
      return operations.filter(op => op._id !== data._id);
    }
    case DELETE_ITEM: {
      const { _id } = data;
      return operations.filter(op => op.from_id !== _id && op.to_id !== _id);
    }
    default: {
      return operations;
    }
  }
}

export default opReducer;
