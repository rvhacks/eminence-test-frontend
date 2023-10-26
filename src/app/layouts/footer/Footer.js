import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "./footer.scss";
// import Footer_Logo from "../../../assets/images/footer_logo.svg";
import Email from "../../../assets/images/auth/icon.png";
import Call from "../../../assets/images/auth/call.png";
import Facebook from "../../../assets/images/auth/facebook.png";
import Insta from "../../../assets/images/auth/insta.png";
import Twitter from "../../../assets/images/auth/twitter.png";
import LinkedIn from "../../../assets/images/auth/linkedin.png";

export default function Footer() {
  return (
    <Box style={{ backgroundColor: "#e1e8eb" }}>
      <Box className="Footer">
        <Grid container spacing={2}>
          <Grid item xs={6} lg={2}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {/* <img src={Footer_Logo} width="60" /> */}
                <span className="footer_item1">E-kart</span>
              </div>
              <List>
                <ListItem className="footer_help margin_bottom">
                  <img src={Email} />
                  &nbsp;
                  <span style={{ letterSpacing: "0.3px" }}>
                    helpdesk@mail.com
                  </span>
                </ListItem>
                <ListItem className="footer_help">
                  <img src={Call} />
                  &nbsp;
                  <span>+ 91 9876 542 210</span>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6} lg={2}>
            <List>
              <ListItem className="footer_item">Men</ListItem>
              <ListItem className="footer_item">Women</ListItem>
              <ListItem className="footer_item">Kids</ListItem>
              <ListItem className="footer_item">Home & Living</ListItem>
            </List>
          </Grid>
          <Grid item xs={6} lg={2}>
            <List>
              <ListItem className="footer_item">Blog</ListItem>
              <ListItem className="footer_item">Career</ListItem>
              <ListItem className="footer_item">Sitemap</ListItem>
              <ListItem className="footer_item">Corporate information</ListItem>
            </List>
          </Grid>
          <Grid item xs={6} lg={2}>
            <List>
              <ListItem className="footer_item">Faq</ListItem>
              <ListItem className="footer_item">Privacy policy</ListItem>
              <ListItem className="footer_item">Help</ListItem>
              <ListItem className="footer_item">Track orders</ListItem>
            </List>
          </Grid>
          <Grid item xs={6} lg={2}>
            <List>
              <ListItem className="footer_item">Shipping</ListItem>
              <ListItem className="footer_item">Cancellation</ListItem>
              <ListItem className="footer_item">Returns</ListItem>
            </List>
          </Grid>
          <Grid item xs={6} lg={2}>
            <List>
              <ListItem className="footer_item">Contact us</ListItem>
              <ListItem className="footer_item">
                <img src={Facebook} />
                &nbsp;
                <img src={Insta} />
                &nbsp;
                <img src={Twitter} />
                &nbsp;
                <img src={LinkedIn} />
                &nbsp;
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <Divider
        sx={{ color: "#fff", borderColor: "rgba(255, 255, 255, 0.5)" }}
      />
      <Box className="footer_lower">
        <Typography mb={3} className="footer_help">
          © 2022 E-kart
        </Typography>
      </Box>
    </Box>
  );
}
