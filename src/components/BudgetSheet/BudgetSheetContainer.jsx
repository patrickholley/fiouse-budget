import React from 'react';
import BudgetSheet from './BudgetSheet';

function BudgetSheetContainer() {
  const items = [
    { itemDate: "17 July 1993", itemName: "Shot Glasses", itemCost: "14.20" },
    { itemDate: "29 April 1991", itemName: "Formal Shoes", itemCost: "31.99" }
  ];

  return (
    <BudgetSheet items={items} />
  );
}

export default BudgetSheetContainer;
