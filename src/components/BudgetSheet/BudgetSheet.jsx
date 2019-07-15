import React from 'react';
import "./BudgetSheet.scss";
import BudgetItemContainer from '../BudgetItem/BudgetItemContainer';

function BudgetSheet(props) {
  const { items } = props;

  return (
    <div className="budget-sheet">
      {items.map(item => (
        <BudgetItemContainer
          itemCost={item.itemCost}
          itemDate={item.itemDate}
          itemName={item.itemName}
        />
      ))}
    </div>
  );
}

export default BudgetSheet;
