import { authTypes } from "../../type/auth/auth";

const initialState = {
  isLoading: false,
  adminData: null,
  msg: "",
  isLoggedIn: "",
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.POST_SIGN_ADMIN_PENDING:
      return {
        ...state,
        isLoading: action.isLoading,
        msg: "",
      };
    case authTypes.POST_SIGN_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        adminData: action.payload,
        isLoggedIn: "true",
        msg: "",
      };
    case authTypes.POST_SIGN_ADMIN_FAILED:
      return {
        ...state,
        isLoading: action.isLoading,
        adminData: action.payload,
        msg: action.msg,
      };
    default:
      return state;
  }
};
