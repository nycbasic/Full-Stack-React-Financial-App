import { EDIT_INCOME } from "../actions/index";

export default function(state = [0], action) {
  switch (action.type) {
    case EDIT_INCOME:
      return action.payload;
    default:
      return state;
  }
}
