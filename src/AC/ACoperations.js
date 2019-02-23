import { RSAA } from "redux-api-middleware";

import { START, ERR } from "./ACfinance";

export const ADD_OP = "ADD_OP";
export const GET_OPS = "GET_OPS";
export const DELETE_OP = "DELETE_OP";

export function getOps() {
  return {
    [RSAA]: {
      types: [START, GET_OPS, ERR],
      method: "GET",
      endpoint: "/operations"
    }
  };
}

export function addOp(formData) {
  return {
    [RSAA]: {
      types: [START, ADD_OP, ERR],
      method: "POST",
      endpoint: "/operations",
      body: formData
    }
  };
}

export function delOp(_id) {
  return {
    [RSAA]: {
      types: [START, DELETE_OP, ERR],
      method: "DELETE",
      endpoint: `/operations/${_id}`
    }
  };
}
