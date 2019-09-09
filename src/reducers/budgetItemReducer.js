import networkStatus from "../lib/constants/networkStatus";
import {
  GET_ITEMS_ERROR,
  GET_ITEMS_RESPONSE,
  GET_ITEMS_REQUEST,
  ADD_ITEM_REQUEST,
  ADD_ITEM_RESPONSE,
  ADD_ITEM_ERROR
} from "../lib/constants/actions";

export const initialState = {
  budgetItems: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ITEM_REQUEST:
      return { ...state };
    case ADD_ITEM_RESPONSE:
      return {
        ...state,
        budgetItems: state.budgetItems.concat(payload.item)
      };
    case ADD_ITEM_ERROR:
      return { ...state };
    case GET_ITEMS_REQUEST:
      return { ...state };
    case GET_ITEMS_RESPONSE:
      return { ...state, budgetItems: payload.budgetItems };
    case GET_ITEMS_ERROR:
      return { ...state };
    default:
      return state;
  }
}
