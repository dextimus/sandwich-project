import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(el => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize)" }}>{el}</span>:{" "}
        {props.ingredients[el]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A tasty sandwich with the ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.fullPrice}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
