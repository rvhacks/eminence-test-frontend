import { authTypes } from "../../type/auth/auth";
import { POST } from "../../../../services/api";
import { toast } from "react-toastify";

export const adminLogin = (user, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: authTypes.POST_SIGN_ADMIN_PENDING,
      });
      const res = await POST("auth/login", user);
      if (res?.data?.code === "SCC0003") {
        localStorage.setItem("ACCESS_TOKEN", res.data.result.token);
        dispatch({
          type: authTypes.POST_SIGN_ADMIN_SUCCESS,
          payload: res.data.result,
        });
        toast.success(res?.data?.message);
        callback();
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {}
  };
};
export const adminSignUp = (user, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: authTypes.POST_SIGN_ADMIN_PENDING,
      });
      const res = await POST("auth/register", user);
      if (res?.data?.code === "SCC0002") {
        dispatch({
          type: authTypes.POST_SIGN_ADMIN_SUCCESS,
          payload: res.data.result,
        });
        toast.success(res?.data?.message);
        callback();
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {}
  };
};

export const logout = () => {
  return async () => {
    try {
      const token = localStorage.getItem("ACCESS_TOKEN");
      const res = await POST("auth/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(res?.data?.message);
      localStorage.removeItem("ACCESS_TOKEN");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
};
