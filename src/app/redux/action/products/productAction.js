import { GET, POST, PUT } from "../../../../services/api";
import { adminTypes } from "../../type/adminTypes";

export const productAction = (Payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_PRODUCT_LISTING_DATA_PENDING,
        isLoading: true,
      });
      const endpoint = Payload ? `products/category/${Payload}` : "products/";
      const res = await GET(endpoint);
      console.log(res, "res");
      dispatch({
        type: adminTypes.GET_PRODUCT_LISTING_DATA_SUCCESS,
        payload: res?.data?.result ?? [],
        isLoading: false,
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_PRODUCT_LISTING_DATA_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};
export const productDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: adminTypes.GET_PRODUCT_DETAILS_DATA_PENDING,
        isLoading: true,
      });
      const updatedId = id.slice(1);
      const res = await GET(`products?productId=${updatedId}`);
      console.log(res, "res");
      dispatch({
        type: adminTypes.GET_PRODUCT_DETAILS_DATA_SUCCESS,
        payload: res?.data?.result ?? [],
        isLoading: false,
      });
    } catch (error) {
      dispatch({
        type: adminTypes.GET_PRODUCT_DETAILS_DATA_FAILED,
        payload: [],
        isLoading: false,
        msg: (error && error?.message) ?? "",
      });
    }
  };
};
