import React from "react";
import "./AddBudgetItem.scss";

function AddBudgetItem(props) {
  const { handleChange, handleSubmit, itemName, itemCost } = props;

  return (
    <form className="add-budget-item" onSubmit={handleSubmit}>
      <input
        onChange={function(e) {
          handleChange(e.target.value, "itemName");
        }}
        placeholder="Description"
        type="text"
        value={itemName}
      />
      <input
        onChange={function(e) {
          handleChange(e.target.value, "itemCost");
        }}
        placeholder="Cost"
        type="tel"
        value={itemCost}
      />
      <button type="submit">Add Budget Item</button>
    </form>
  );
}

export default AddBudgetItem;
