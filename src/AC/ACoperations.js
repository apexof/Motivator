import { RSAA } from "redux-api-middleware";
import { START, ERR, getHeaders } from "./ACcommon";

export const ADD_OP = "ADD_OP";
export const EDIT_OP = "EDIT_OP";
export const GET_OPS = "GET_OPS";
export const DELETE_OP = "DELETE_OP";

export function getOps() {
  return {
    [RSAA]: {
      types: [START, GET_OPS, ERR],
      method: "GET",
      endpoint: "/operations",
      headers: getHeaders()
    }
  };
}

export function addOp(formData) {
  return {
    [RSAA]: {
      types: [START, ADD_OP, ERR],
      method: "POST",
      endpoint: "/operations",
      body: formData,
      headers: getHeaders()
    }
  };
}

export function editOp(formData) {
  return {
    [RSAA]: {
      types: [START, EDIT_OP, ERR],
      method: "PUT",
      endpoint: "/operations",
      body: formData,
      headers: getHeaders()
    }
  };
}

export function delOp(_id) {
  return {
    [RSAA]: {
      types: [START, DELETE_OP, ERR],
      method: "DELETE",
      endpoint: `/operations/${_id}`,
      headers: getHeaders()
    }
  };
}
