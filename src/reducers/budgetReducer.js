import {
  CREATE_BUDGET_REQUEST,
  CREATE_BUDGET_RESPONSE,
  CREATE_BUDGET_ERROR,
  GET_BUDGETS_RESPONSE
} from "../lib/constants/actions";
import networkStatus from "../lib/constants/networkStatus";

export const initialState = {
  budgets: [],
  createBudgetStatus: networkStatus.CLEAR,
  currentBudget: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_BUDGET_REQUEST:
      return { ...state, createBudgetStatus: networkStatus.IN_PROGRESS };
    case CREATE_BUDGET_RESPONSE:
      return {
        ...state,
        budgets: state.budgets.concat(payload.currentBudget),
        createBudgetStatus: networkStatus.SUCCESS,
        currentBudget: payload.currentBudget
      };
    case CREATE_BUDGET_ERROR:
      return { ...state, createBudgetStatus: networkStatus.ERROR_OTHER };
    case GET_BUDGETS_RESPONSE:
      return { ...state, budgets: payload.budgets };
    default:
      return state;
  }
}
