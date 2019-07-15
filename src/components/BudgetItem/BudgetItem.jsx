import React from 'react';
import "./BudgetItem.scss";

function BudgetItem(props) {
  const { itemName, itemCost, itemDate } = props;
  return (
    <div className="budget-item">
      <span>{itemName}</span>
      <span>{itemCost}</span>
      <span>{itemDate}</span>
    </div>
  );
}

export default BudgetItem;
