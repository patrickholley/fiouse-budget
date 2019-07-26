import authReducer from "./authReducer";
import budgetReducer from "./budgetReducer";
import { createCombinedReducer } from "../lib/utils/reducerHelpers";
import actions from "../actions";

const combinedReducers = createCombinedReducer({
  auth: authReducer,
  budget: budgetReducer
}, actions);

export default combinedReducers;
