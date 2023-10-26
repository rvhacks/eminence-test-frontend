import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  listingData: [],
};
export const getProductsReducer = (state = initialState, action) => {
  console.log(action.payload, "actionpayload");
  switch (action.type) {
    case adminTypes.GET_PRODUCT_LISTING_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case adminTypes.GET_PRODUCT_LISTING_DATA_SUCCESS:
      return {
        ...state,
        listingData: action.payload,
        isLoading: false,
      };
    case adminTypes.GET_PRODUCT_LISTING_DATA_FAILED:
      return {
        ...state,
        listingData: [],
        isLoading: false,
      };
    default:
      return state;
  }
};
