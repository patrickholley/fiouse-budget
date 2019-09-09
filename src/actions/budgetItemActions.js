import firebase from "../lib/utils/FirebaseService";
import {
  ADD_ITEM_RESPONSE,
  ADD_ITEM_ERROR,
  GET_ITEMS_RESPONSE,
  GET_ITEMS_ERROR
} from "../lib/constants/actions";

export function addBudgetItem({ payload, dispatch }) {
  const { budgetItem, currentBudget } = payload;

  firebase
    .addBudgetItem(currentBudget, budgetItem)
    .then(item => {
      dispatch({
        type: ADD_ITEM_RESPONSE,
        payload: { item }
      });
    })
    .catch(error => {
      console.error("Error adding budget item:", error);
      dispatch({ type: ADD_ITEM_ERROR });
    });
}

export function getBudgetItems({ payload, dispatch }) {
  firebase
    .getBudgetItems(payload)
    .then(items => {
      dispatch({
        type: GET_ITEMS_RESPONSE,
        payload: { budgetItems: items }
      });
    })
    .catch(error => {
      console.error("Error adding budget item:", error);
      dispatch({ type: GET_ITEMS_ERROR });
    });
}
