import React, { useContext, useState } from "react";
import CreateBudget from "./CreateBudget";
import { AppContext } from "../../App";
import { CREATE_BUDGET_REQUEST } from "../../lib/constants/actions";

function CreateBudgetContainer() {
  const { state, dispatch } = useContext(AppContext);
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgetName, setBudgetName] = useState("");

  function handleChange(value, type) {
    type === "budgetAmount" ? setBudgetAmount(value) : setBudgetName(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: CREATE_BUDGET_REQUEST,
      payload: { budgetName, budgetAmount }
    });
  }

  return (
    <CreateBudget
      budgetAmount={budgetAmount}
      budgetName={budgetName}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default CreateBudgetContainer;
