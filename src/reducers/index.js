import authReducer from "./authReducer";
import budgetReducer from "./budgetReducer";
import budgetItemReducer from "./budgetItemReducer";
import { createCombinedReducer } from "../lib/utils/reducerHelpers";
import actions from "../actions";

const combinedReducers = createCombinedReducer(
  {
    auth: authReducer,
    budget: budgetReducer,
    budgetItem: budgetItemReducer
  },
  actions
);

export default combinedReducers;
