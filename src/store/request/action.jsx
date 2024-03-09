import { ReportRequestServices } from "../../services/reportRequest";

export const ALL_REQUEST = "ALL_REQUEST";
export const MONEY_UNPAID_REQUEST = "MONEY_UNPAID_REQUEST";
export const MONEY_PAID_REQUEST = "MONEY_PAID_REQUEST";
export const BAN_REQUEST = "BAN_REQUEST";
export const ALREADY_BAN_REQUEST = "ALREADY_BAN_REQUEST";
export const allRequest = (list) => {
  return {
    type: ALL_REQUEST,
    payload: list,
  };
};
export const moneyUnpaidRequest = (list) => {
  return {
    type: MONEY_UNPAID_REQUEST,
    payload: list,
  };
};
export const moneyPaidRequest = (list) => {
  return {
    type: MONEY_PAID_REQUEST,
    payload: list,
  };
};
export const banRequest = (list) => {
  return {
    type: BAN_REQUEST,
    payload: list,
  };
};
export const alreadyBanRequest = (list) => {
  return {
    type: ALREADY_BAN_REQUEST,
    payload: list,
  };
};
export function actRequestGetMoneyUnpaidAsync(token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByMoneyUnpaidRequest(token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(moneyUnpaidRequest(response.data));
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

export function actRequestGetMoneyPaidAsync(token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByMoneyPaidRequest(token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(moneyPaidRequest(response.data));
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
