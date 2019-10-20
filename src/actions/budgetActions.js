import firebase from "../lib/utils/FirebaseService";
import {
  CREATE_BUDGET_RESPONSE,
  CREATE_BUDGET_ERROR,
  GET_BUDGETS_RESPONSE,
  GET_BUDGETS_ERROR
} from "../lib/constants/actions";

export function createBudget({ payload, dispatch }) {
  firebase
    .createBudget(payload)
    .then(budget => {
      dispatch({
        type: CREATE_BUDGET_RESPONSE,
        payload: { currentBudget: budget }
      });
    })
    .catch(error => {
      console.error("Error creating budget:", error);
      dispatch({ type: CREATE_BUDGET_ERROR });
    });
}

export function getBudgets({ dispatch }) {
  firebase
    .getBudgets()
    .then(({ budgets }) => {
      // error handling
      dispatch({
        type: GET_BUDGETS_RESPONSE,
        payload: { budgets: Object.values(budgets) }
      });
    })
    .catch(error => {
      console.error("Error getting budgets:", error);
      dispatch({ type: GET_BUDGETS_ERROR });
    });
}
