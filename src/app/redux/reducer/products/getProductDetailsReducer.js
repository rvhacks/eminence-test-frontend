import { adminTypes } from "../../type/adminTypes";

const initialState = {
  isLoading: false,
  listingDataDetails: [],
};
export const getProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminTypes.GET_PRODUCT_DETAILS_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case adminTypes.GET_PRODUCT_DETAILS_DATA_SUCCESS:
      return {
        ...state,
        listingDataDetails: action.payload,
        isLoading: false,
      };
    case adminTypes.GET_PRODUCT_DETAILS_DATA_FAILED:
      return {
        ...state,
        listingDataDetails: [],
        isLoading: false,
      };
    default:
      return state;
  }
};
