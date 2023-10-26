import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../app/modules/page-not-found";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import ProductListing from "../app/modules/product/ProductListing";
import ProductDetails from "../app/modules/product/ProductDetails";
import LandingScreen from "../app/modules/homepage/LandingScreen";
import Homepage from "../app/modules/homepage/Homepage";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/" element={<LandingScreen />} />
        </Route>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route
            path="/product-listing/view-details/:id"
            element={<ProductDetails />}
          />
        </Route>
      </Routes>
    </>
  );
}
