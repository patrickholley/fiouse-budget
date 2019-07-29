import React from "react";
import "./CreateBudget.scss";

function CreateBudget(props) {
  const { budgetAmount, budgetName, handleChange, handleSubmit } = props;

  return (
    <form className="create-budget" onSubmit={handleSubmit}>
      <input
        onChange={function(e) {
          handleChange(e.target.value, "budgetName");
        }}
        type="text"
        placeholder="Name"
        value={budgetName}
      />
      <input
        onChange={function(e) {
          handleChange(e.target.value, "budgetAmount");
        }}
        type="tel"
        placeholder="Weekly Amount"
        value={budgetAmount}
      />
      <button type="submit">Create Budget</button>
    </form>
  );
}

export default CreateBudget;
