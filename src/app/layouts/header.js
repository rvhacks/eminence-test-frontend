import { AppBar, Button, Grid } from "@mui/material";
import React from "react";
import "./header.scss";
import { useState } from "react";
import SignIn from "../modules/authentication/sign-in/SignIn";
import SignUp from "../modules/authentication/signup/SignUp";
import CustomDialog from "../../app/components/Dialogue/index";
import { useNavigate } from "react-router-dom";
import ProfileSvg from "../../assets/images/auth/profile.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/auth/authAction";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [issignup, setIsignup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const { isLoggedIn, adminData } = useSelector((state) => state.auth);

  return (
    <>
      <AppBar position="fixed">
        <Grid container spacing={2} className="header-main-grid">
          <Grid
            item
            xs={5}
            className="header-frist-grid"
            x={{
              display: { xs: "block", sm: "block", md: "block" },
              position: "fixed",
            }}
          >
            <div className="header-div">
              <p
                className="header-first-typo"
                onClick={() => navigate("/home")}
              >
                E-Kart
              </p>
            </div>
            {isLoggedIn && (
              <div
                className="navItems"
                onClick={() => navigate("/product-listing")}
              >
                <Button>Products</Button>
              </div>
            )}
          </Grid>
          <Grid item xs={7} className="second-header-grid">
            {isLoggedIn ? (
              <div className="profile_bx">
                <img src={ProfileSvg} alt={ProfileSvg} />
                <p>
                  Hi,<span>{adminData?.username}</span>{" "}
                </p>
                <Button variant="outlined" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="btnheader">
                <Button variant="outlined" onClick={() => setIsLogin(true)}>
                  Login
                </Button>
                <Button variant="outlined" onClick={() => setIsignup(true)}>
                  Signup
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </AppBar>
      <CustomDialog
        isOpen={isLogin}
        bodyChild={<SignIn setIsLogin={setIsLogin} />}
        handleClose={() => setIsLogin(false)}
        isClose={true}
        mainClass="fullscreen_image"
      />
      <CustomDialog
        isOpen={issignup}
        bodyChild={<SignUp setIsignup={setIsignup} />}
        handleClose={() => setIsignup(false)}
        isClose={true}
        mainClass="fullscreen_image"
      />
    </>
  );
};

export default Header;
