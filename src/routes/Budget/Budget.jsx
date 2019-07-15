import React from 'react';
import "./Budget.scss";
import BudgetSheetContainer from '../../components/BudgetSheet';
import AddBudgetItemContainer from '../../components/AddBudgetItem';

function Budget() {
  return (
    <div className="budget">
      <BudgetSheetContainer />
      <AddBudgetItemContainer />
    </div>
  );
}

export default Budget;
