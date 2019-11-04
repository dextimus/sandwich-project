import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be functional component
  UNSAFE_componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(el => {
      return (
        <li key={el}>
          <span style={{ textTransform: "capitalize)" }}>{el}</span>:{" "}
          {this.props.ingredients[el]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A tasty sandwich with the ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.fullPrice}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
