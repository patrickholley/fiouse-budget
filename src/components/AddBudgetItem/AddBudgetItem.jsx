import React from 'react';
import "./AddBudgetItem.scss";

function AddBudgetItem(props) {
  const {
    handleChange,
    handleSubmit,
    itemName,
    itemCost
  } = props;

  return (
    <form className="add-budget-item" onSubmit={handleSubmit}>
      <input onChange={e => { handleChange(e.target.value, "itemName"); }} type="text" value={itemName} />
      <input onChange={e => { handleChange(e.target.value, "itemCost"); }} type="tel" value={itemCost} />
      <button type="submit">Add Budget Item</button>
    </form>
  );
}

export default AddBudgetItem;
