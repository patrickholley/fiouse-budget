import React, { useContext, useEffect } from 'react';
import BudgetSheet from '../../components/BudgetSheet';
import AddBudgetItem from '../../components/AddBudgetItem';
import { FirebaseContext } from '../../lib/utils/FirebaseService';
import "./Budget.scss";

function Budget(props) {
  const firebase = useContext(FirebaseContext);

  useEffect(function() {
    if (!firebase.user) props.history.push("/signin");
  }, []);

  return (
    <div className="budget">
      <BudgetSheet />
      <AddBudgetItem />
    </div>
  );
}

export default Budget;
