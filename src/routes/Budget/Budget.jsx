import React from 'react';
import BudgetSheet from '../../components/BudgetSheet';
import AddBudgetItem from '../../components/AddBudgetItem';
import "./Budget.scss";

function Budget(props) {
  return (
    <div className="budget">
      <BudgetSheet />
      <AddBudgetItem />
    </div>
  );
}

export default Budget;
