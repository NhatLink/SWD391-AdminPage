import { UserServices } from "../../services/userServices";
import {
  actBanRequestGetAsync,
  actAlreadyBanRequestGetAsync,
} from "../../store/request/action";
import { toast } from "react-toastify";
export const ACT_USER_LOGIN = "ACT_USER_LOGIN";
export const ACT_USER_NOT_FETCH_ME = "ACT_USER_NOT_FETCH_ME";
export const ALL_USER = "ALL_USER";

export function actUserLogin(currentUser, token, role) {
  return {
    type: ACT_USER_LOGIN,
    payload: {
      currentUser,
      token,
      role,
    },
  };
}
export function actUserNotFetchMe(token) {
  return {
    type: ACT_USER_NOT_FETCH_ME,
    payload: token,
  };
}
export const allUser = (list) => {
  return {
    type: ALL_USER,
    payload: list,
  };
};

export function actConfirmBanUserPutAsync(data, token) {
  return async (dispatch) => {
    try {
      const response = await UserServices.banUser(data, token);
      if (response.status === 200 || response.status === 201) {
        // toast.success(`Bạn đã ban tài khoản thành công`);
        dispatch(actAlreadyBanRequestGetAsync(token));
        dispatch(actBanRequestGetAsync(token));
        dispatch(actAllUserGetAsync(token));
      } else {
        // toast.error("Post Product to fail");
        console.log("fail");
      }
    } catch (error) {
      console.error("Error occurred while posting auction:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}

export function actAllUserGetAsync(token) {
  return async (dispatch) => {
    try {
      const response = await UserServices.getAllUser(token);
      if (response.status === 200 || response.status === 201) {
        // toast.success("New Product has been added successfully ~");
        dispatch(allUser(response.data));
      } else {
        // toast.error("Post Product to fail");
        console.log("fail");
      }
    } catch (error) {
      console.error("Error occurred while posting auction:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}

// export function actUserByIdGetAsync(id, token) {
//   return async (dispatch) => {
//     try {
//       const response = await UserServices.getAllUser(id, token);
//       if (response.status === 200 || response.status === 201) {
//         // toast.success("New Product has been added successfully ~");
//         dispatch(allUser(response.data));
//       } else {
//         // toast.error("Post Product to fail");
//         console.log("fail");
//       }
//     } catch (error) {
//       console.error("Error occurred while posting auction:", error);
//       // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
//     }
//   };
// }
