import { ALL_PRODUCT, PRODUCT_BY_ID } from "./action";

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_BY_ID:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
