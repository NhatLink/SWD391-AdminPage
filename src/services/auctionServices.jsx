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
  getAuctionNotYetAuctionedByUserID(id, token) {
    return API.get(`/auctions/not-yet/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctionAboutToAuctionByUserID(id, token) {
    return API.get(`/auctions/about-to/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctioningByUserID(id, token) {
    return API.get(`/auctions/auctioning/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAuctionedByUserID(id, token) {
    return API.get(`/auctions/autioned/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getMemberNotYetAuctionedByUserID(id, token) {
    return API.get(`/auctions/memberAuctions-not-yet/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getMemberAboutToAuctionByUserID(id, token) {
    return API.get(`/auctions/memberAuctions-about-to/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getMemberAuctioningByUserID(id, token) {
    return API.get(`/auctions/memberAuctions-auctioning/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getMemberAuctionedByUserID(id, token) {
    return API.get(`/auctions/memberAuctions-auctioned/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
