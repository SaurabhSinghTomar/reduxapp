import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

const initialState = {
  cardData: [],
};

export default function Items(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("redu", action.type);

      return [...state, { cardData: action.data }];

    case REMOVE_FROM_CART:
      state.splice();
      return {
        ...state,
      };

    default:
      return state;
  }
}
