import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    tomato: 0,
    cheese: 0,
    bacon: 0
  },
  totalPrice: 1.5
};

const ingredientPrices = {
  salad: 0.3,
  meat: 1.2,
  tomato: 0.4,
  cheese: 0.8,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + ingredientPrices[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - ingredientPrices[action.ingredientName]
      };
    default:
      return state;
  }
};

export default reducer;
