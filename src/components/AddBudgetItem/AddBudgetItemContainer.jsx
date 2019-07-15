import React, { useState } from 'react';
import AddBudgetItem from './AddBudgetItem';

function AddBudgetItemContainer() {
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");

  function handleChange(value, type) {
    type === "itemName" ? setItemName(value) : setItemCost(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(itemName, itemCost);
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
