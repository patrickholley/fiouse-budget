import authReducer from "./authReducer";
import budgetReducer from "./budgetReducer";
import { combineReducers } from "../lib/utils/reducerHelpers";

const combinedReducers = combineReducers({
  auth: authReducer,
  budget: budgetReducer
});

export default combinedReducers;
