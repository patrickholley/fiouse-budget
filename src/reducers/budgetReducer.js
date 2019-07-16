import {
  GET_BUDGET_REQUEST,
  GET_BUDGET_RESPONSE,
  GET_BUDGET_ERROR,
  GET_BUDGET_ITEMS_REQUEST,
  GET_BUDGET_ITEMS_RESPONSE,
  GET_BUDGET_ITEMS_ERROR
} from "../lib/constants/actions";


export const initialState = {

};

export default function reducer(state, { type, payload }) {
  switch(type) {
    case GET_BUDGET_REQUEST:
      return { ...state };
    case GET_BUDGET_RESPONSE:
      return { ...state };
    case GET_BUDGET_ERROR:
      return { ...state };
    case GET_BUDGET_ITEMS_REQUEST:
      return { ...state };
    case GET_BUDGET_ITEMS_RESPONSE:
      return { ...state };
    case GET_BUDGET_ITEMS_ERROR:
      return { ...state };
    default:
      return state; 
  }
}
