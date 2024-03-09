import { ReportWalletServices } from "../../services/walletRequest";

export const CONFIRM_DEPOSIT = "CONFIRM_DEPOSIT";

export const confirmDeposit = (list) => {
  return {
    type: CONFIRM_DEPOSIT,
    payload: list,
  };
};

export function actRequestConfirmAsync(data, token) {
  return (dispatch) => {
    console.log("request");
    ReportWalletServices.ConfirmDeposit(data, token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(confirmDeposit(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
