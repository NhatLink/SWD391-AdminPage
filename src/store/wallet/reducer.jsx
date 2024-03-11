import { CONFIRM_DEPOSIT, ALL_WALLET_HISTORY } from "./action";

const initialState = {
  confirmDeposit: [],
  allWalletHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_WALLET_HISTORY:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        allWalletHistory: action.payload,
      };
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
