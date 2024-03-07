import { API } from "./api";

export const ReportRequestServices = {
  addProduct(data, token) {
    return API.post("/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getByTypeRequest(data, token) {
    return API.get("/report_requests/getByRequestMoney", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
