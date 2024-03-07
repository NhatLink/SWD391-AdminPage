import { ReportRequestServices } from "../../services/reportRequest";

export const ALL_REQUEST = "ALL_REQUEST";
export const MONEY_REQUEST = "ALL_REQUEST";
export const BAN_REQUEST = "ALL_REQUEST";

export const allRequest = (list) => {
  return {
    type: ALL_REQUEST,
    payload: list,
  };
};
// export const moneyRequest = (list) => {
//   return {
//     type: MONEY_REQUEST,
//     payload: list,
//   };
// };
// export const banRequest = (list) => {
//   return {
//     type: BAN_REQUEST,
//     payload: list,
//   };
// };
export function actRequestGetByTypeAsync(data, token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByTypeRequest(data, token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(allRequest(response.data));
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
