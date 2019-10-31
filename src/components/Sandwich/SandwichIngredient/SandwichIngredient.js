import React, { Component } from "react";
import classes from "./SandwichIngredient.css";
import propTypes from "prop-types";

class sandwichIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread":
        ingredient = <div className={classes.Bread}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "tomato":
        ingredient = <div className={classes.Tomato}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

sandwichIngredient.propTypes = {
  type: propTypes.string.isRequired
};

export default sandwichIngredient;
