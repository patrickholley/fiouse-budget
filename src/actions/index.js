import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  CREATE_BUDGET_REQUEST
} from "../lib/constants/actions";
import { signIn, signOut } from "./authActions";
import { createBudget } from "./budgetActions";

export default {
  [SIGN_IN_REQUEST]: signIn,
  [SIGN_OUT_REQUEST]: signOut,
  [CREATE_BUDGET_REQUEST]: createBudget
};
