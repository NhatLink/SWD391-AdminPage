import { API } from "./api";

export const AuctionServices = {
  addAuction(data, token) {
    return API.post("/auctions", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllAuction(token) {
    return API.get("/auctions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctionNotYetAuctionedByUser(token) {
    return API.get("/auctions/not-yet", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctionAboutToAuctionByUser(token) {
    return API.get("/auctions/about-to", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctioningByUser(token) {
    return API.get("/auctions/auctioning", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctionedByUser(token) {
    return API.get("/auctions/autioned", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
