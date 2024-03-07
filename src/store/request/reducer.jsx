import { ALL_REQUEST } from "./action";

const initialState = {
  request: [],
  // moneyRequest: [],
  // banRequest: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        request: action.payload,
      };
    // case BAN_REQUEST:
    //   // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
    //   return {
    //     ...state,
    //     moneyRequest: action.payload,
    //   };
    // case MONEY_REQUEST:
    //   // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
    //   return {
    //     ...state,
    //     banRequest: action.payload,
    //   };

    default:
      return state;
  }
};

export default reducer;
