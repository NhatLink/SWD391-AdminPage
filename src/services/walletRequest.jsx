import { API } from "./api";

export const ReportWalletServices = {
  ConfirmDeposit(data, token) {
    return API.post("/wallets/browse-deposit", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllWalletHistory(token) {
    return API.get("/wallets/walletHistory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
