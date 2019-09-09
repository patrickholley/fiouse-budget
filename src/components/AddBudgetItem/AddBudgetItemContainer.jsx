import React, { useContext, useState } from "react";
import AddBudgetItem from "./AddBudgetItem";
import { ADD_ITEM_REQUEST } from "../../lib/constants/actions";
import { AppContext } from "../../App";

function AddBudgetItemContainer() {
  const { state, dispatch } = useContext(AppContext);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");

  function handleChange(value, type) {
    type === "itemName" ? setItemName(value) : setItemCost(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ADD_ITEM_REQUEST,
      payload: {
        budgetItem: { itemName, itemCost },
        currentBudget: state.budget.currentBudget
      }
    });
  }

  return (
    <AddBudgetItem
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      itemName={itemName}
      itemCost={itemCost}
    />
  );
}

export default AddBudgetItemContainer;
