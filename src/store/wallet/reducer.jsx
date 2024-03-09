import { CONFIRM_DEPOSIT } from "./action";

const initialState = {
  confirmDeposit: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_DEPOSIT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        confirmDeposit: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
