import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* passed the date as a property */}
      <ExpenseDate date={props.date}/> 
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">KES. {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
