import {
  ALL_REQUEST,
  MONEY_PAID_REQUEST,
  MONEY_UNPAID_REQUEST,
} from "./action";

const initialState = {
  request: [],
  requestPaid: [],
  requestUnpaid: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        request: action.payload,
      };
    case MONEY_PAID_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        requestPaid: action.payload,
      };
    case MONEY_UNPAID_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        requestUnpaid: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
