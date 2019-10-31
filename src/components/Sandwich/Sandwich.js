import React from "react";
import classes from "./Sandwich.css";
import SandwichIngredient from "./SandwichIngredient/SandwichIngredient";

const sandwich = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ing => {
      return [...Array(props.ingredients[ing])].map((_, i) => {
        return <SandwichIngredient key={ing + i} type={ing} />;
      });
    })
    .reduce((a, b) => {
      return a.concat(b);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please, add ingredients!</p>;
  }

  return (
    <div className={classes.Sandwich}>
      <SandwichIngredient type="bread" />
      {transformedIngredients}
      <SandwichIngredient type="bread" />
    </div>
  );
};

export default sandwich;
