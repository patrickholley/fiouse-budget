import {
  CREATE_BUDGET_REQUEST,
  CREATE_BUDGET_RESPONSE,
  CREATE_BUDGET_ERROR
} from "../lib/constants/actions";
import networkStatus from "../lib/constants/networkStatus";

export const initialState = {
  budgets: null,
  createBudgetStatus: networkStatus.CLEAR,
  currentBudget: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_BUDGET_REQUEST:
      return { ...state, createBudgetStatus: networkStatus.IN_PROGRESS };
    case CREATE_BUDGET_RESPONSE:
      return { ...state, createBudgetStatus: networkStatus.SUCCESS };
    case CREATE_BUDGET_ERROR:
      return { ...state, createBudgetStatus: networkStatus.ERROR_OTHER };
    default:
      return state;
  }
}
