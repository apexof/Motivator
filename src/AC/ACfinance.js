import { RSAA } from "redux-api-middleware";

export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const DISABLE_ITEM = "DISABLE_ITEM";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const START = "_START";
export const ERR = "_ERR";

export function getItems(type) {
  return {
    [RSAA]: {
      endpoint: `/${type}`,
      method: "GET",
      types: [START, GET_ITEMS, ERR]
    }
  };
}

export function addItem(formData, type) {
  return {
    [RSAA]: {
      types: [START, ADD_ITEM, ERR],
      method: "POST",
      endpoint: `/${type}`,
      body: formData
    }
  };
}

export function editItem(body, type) {
  return {
    [RSAA]: {
      types: [START, EDIT_ITEM, ERR],
      method: "PUT",
      endpoint: `/${type}`,
      body
    }
  };
}

export function deleteItem(_id, type) {
  return {
    [RSAA]: {
      types: [START, DELETE_ITEM, ERR],
      method: "DELETE",
      endpoint: `/${type}/${_id}`
    }
  };
}

export function disableItem(_id, type) {
  return {
    [RSAA]: {
      types: [START, DISABLE_ITEM, ERR],
      method: "DELETE",
      endpoint: `/disable_${type}/${_id}`
    }
  };
}
