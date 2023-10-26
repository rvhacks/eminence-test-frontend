import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import "./style.scss";
import Header from "../header";
import Footer from "../footer/Footer";

function DashboardView({ children = <></> }) {
  return (
    <Box sx={{ marginLeft: "0px" }}>
      <CssBaseline />
      <Header />
      <Toolbar style={{ minHeight: "80px" }} />

      <Box
        component="nav"
        sx={{ width: { lg: "" }, flexShrink: { sm: 0 }, background: "red" }}
      ></Box>
      <Box
        className="childrenItem"
        component="main"
        sx={{
          flexGrow: 1,
          p: "4% 3% 3% 3%",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default DashboardView;
