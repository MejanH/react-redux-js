import * as actions from "./actionTypes";

export function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { value: state.value + 1 };
    case actions.DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
