import { API } from "./api";

export const UserServices = {
  loginUser(data) {
    return API.post("/users/login", data);
  },
  fetchMe: (token) => {
    return API.get("/users/fetchMe", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  banUser(data, token) {
    return API.post("/users/ban-user", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllUser(token) {
    return API.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // getOneUser(id, token) {
  //   return API.get("/users//userid/:userid", id, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
};
