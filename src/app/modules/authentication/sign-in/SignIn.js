import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "../../../components/TextField/TextField";

import Button from "@mui/material/Button";
import "../auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../../redux/action/auth/authAction";
import * as yup from "yup";
import { IconButton, InputLabel, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignIn({ setIsLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const logInSchema = yup.object().shape({
    username: yup.string("").trim().required("Email address is required"),
    password: yup
      .string()
      .required("Password is required*")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .max(20, "Password is too long - should be 20 chars maximum."),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: (values) => {
      dispatch(
        adminLogin(values, () => {
          navigate("/home");
          setIsLogin(false);
        })
      );
    },
  });
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn, "xxxxxxxxxxxxxxxxxxxxxxx");
  const { handleSubmit, getFieldProps } = formik;

  function AvoidSpace(event) {
    const key = event.keyCode || event.which;
    const keyChar = String.fromCharCode(key);
    if (/\s/.test(keyChar)) {
      event.preventDefault();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box className="auth_box">
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} display={{ xs: "none", lg: "block" }}>
              <div className="login_image"></div>
            </Grid>
            <Grid item lg={6} xs={12}>
              <div className="form-div">
                <div className="login_form_submain">
                  <div className="login-text1">
                    <h1>{"Login to your Account"}</h1>
                  </div>
                  <Grid item container spacing={3}>
                    <Grid item md={12} xs={12}>
                      <InputLabel className="label">
                        <p className="email-id"> Username</p>
                      </InputLabel>
                      <TextField
                        placeholder={`Enter your username`}
                        type="text"
                        name="username"
                        {...getFieldProps("username")}
                        onKeyPress={(event) => AvoidSpace(event)}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <div className="error">{formik.errors.username}</div>
                      ) : null}
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <InputLabel id="label1">
                        <p className="password"> Password</p>
                      </InputLabel>
                      <TextField
                        placeholder={`${"Enter at least 8+ characters"}`}
                        name="text"
                        type={showPassword ? "text" : "password"}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {!showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        {...getFieldProps("password")}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                      ) : null}
                    </Grid>
                  </Grid>
                  <div className="login_btn_custom">
                    <Button type="submit" variant="contained">
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}
