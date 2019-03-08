import { GET_ITEMS,
  ADD_ITEM,
  ADD_OP,
  EDIT_ITEM,
  EDIT_OP,
  DELETE_ITEM,
  DELETE_OP,
  UPDATE_ITEMS,
  DISABLE_ITEM } from "../AC";

function financeReducer(finances = {}, { type, payload: data }) {
  switch (type) {
    case GET_ITEMS: {
      return { ...finances, ...data };
    }

    case ADD_ITEM: {
      const { model } = data;
      const newSection = [...finances[model], data];
      return { ...finances, [model]: newSection };
    }

    case EDIT_ITEM: {
      const { model } = data;
      const newSection = editSect(finances[model], data);
      return { ...finances, [model]: newSection };
    }
    case ADD_OP:
    case DELETE_OP:
    case EDIT_OP:
    case UPDATE_ITEMS: {
      return updateWallets(data.newItems, finances);
    }

    case DELETE_ITEM: {
      const { _id, model, newItems } = data;
      const newSect = finances[model].filter(item => item._id !== _id);
      const fin = { ...finances, [model]: newSect };
      return updateWallets(newItems, fin);
    }

    case DISABLE_ITEM: {
      const { model } = data;
      const newSect = editSect(finances[model], data);
      return { ...finances, [model]: newSect };
    }

    default: {
      return finances;
    }
  }
}

function editSect(section, newItem) {
  const newSect = section.map(item => (item._id === newItem._id ? newItem : item));
  return newSect;
}

function updateWallets(items, fin) {
  return items.reduce((prev, item) => {
    if (!item) return prev;
    const newSect = editSect(prev.wallets, item);
    return { ...prev, wallets: newSect };
  }, fin);
}

export default financeReducer;
