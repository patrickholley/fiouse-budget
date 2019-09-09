import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  CREATE_BUDGET_REQUEST,
  GET_BUDGETS_REQUEST,
  ADD_ITEM_REQUEST
} from "../lib/constants/actions";
import { signIn, signOut } from "./authActions";
import { createBudget, getBudgets } from "./budgetActions";
import { addBudgetItem } from "./budgetItemActions";

export default {
  [SIGN_IN_REQUEST]: signIn,
  [SIGN_OUT_REQUEST]: signOut,
  [CREATE_BUDGET_REQUEST]: createBudget,
  [GET_BUDGETS_REQUEST]: getBudgets,
  [ADD_ITEM_REQUEST]: addBudgetItem
};
