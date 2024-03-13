import {
  ALL_AUCTION,
  NOT_YET_AUCTION,
  ABOUT_TO_AUCTION,
  AUCTIONING,
  AUCTIONED,
  NOT_YET_AUCTION_ID,
  ABOUT_TO_AUCTION_ID,
  AUCTIONING_ID,
  AUCTIONED_ID,
  NOT_YET_AUCTION_MEMBER,
  ABOUT_TO_AUCTION_MEMBER,
  AUCTIONING_MEMBER,
  AUCTIONED_MEMBER,
} from "./action";

const initialState = {
  auctions: [],
  notYetAuction: [],
  aboutToAuction: [],
  auctioning: [],
  auctioned: [],
  notYetAuctionId: [],
  aboutToAuctionId: [],
  auctioningId: [],
  auctionedId: [],
  notYetAuctionMember: [],
  aboutToAuctionMember: [],
  auctioningMember: [],
  auctionedMember: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_AUCTION:
      return {
        ...state,
        auctions: action.payload,
      };
    case NOT_YET_AUCTION:
      return {
        ...state,
        notYetAuction: action.payload,
      };
    case ABOUT_TO_AUCTION:
      return {
        ...state,
        aboutToAuction: action.payload,
      };
    case AUCTIONING:
      return {
        ...state,
        auctioning: action.payload,
      };
    case AUCTIONED:
      return {
        ...state,
        auctioned: action.payload,
      };
    case NOT_YET_AUCTION_ID:
      return {
        ...state,
        notYetAuctionId: action.payload,
      };
    case ABOUT_TO_AUCTION_ID:
      return {
        ...state,
        aboutToAuctionId: action.payload,
      };
    case AUCTIONING_ID:
      return {
        ...state,
        auctioningId: action.payload,
      };
    case AUCTIONED_ID:
      return {
        ...state,
        auctionedId: action.payload,
      };
    case NOT_YET_AUCTION_MEMBER:
      return {
        ...state,
        notYetAuctionMember: action.payload,
      };
    case ABOUT_TO_AUCTION_MEMBER:
      return {
        ...state,
        aboutToAuctionMember: action.payload,
      };
    case AUCTIONING_MEMBER:
      return {
        ...state,
        auctioningMember: action.payload,
      };
    case AUCTIONED_MEMBER:
      return {
        ...state,
        auctionedMember: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
