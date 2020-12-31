import * as actions from "./actionTypes";

export const incrementCounter = () => ({
  type: actions.INCREMENT,
});

export const decrementedCounter = () => ({
  type: actions.DECREMENT,
});
