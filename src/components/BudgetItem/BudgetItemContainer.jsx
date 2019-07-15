import React from 'react';
import BudgetItem from './BudgetItem';

function BudgetItemContainer(props) {
  const { itemName, itemCost, itemDate } = props;

  return (
    <BudgetItem
      itemCost={itemCost}
      itemDate={itemDate}
      itemName={itemName}
    />
  );
}

export default BudgetItemContainer;
