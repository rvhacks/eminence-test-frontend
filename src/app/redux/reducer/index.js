import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { getProductsReducer } from "./products/getProductsReducer";
import { getProductDetailsReducer } from "./products/getProductDetailsReducer";

export const reducers = combineReducers({
  // auth
  auth: authReducer,
  getProductsReducer: getProductsReducer,
  getProductDetailsReducer: getProductDetailsReducer,
});
