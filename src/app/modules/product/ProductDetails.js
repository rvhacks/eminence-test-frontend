import React from "react";
import "./product.scss";
import img1 from "../../../assets/images/auth/gallery2.png";
import { useParams } from "react-router-dom";
import { productDetails } from "../../redux/action/products/productAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const ProductDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(id, "id");

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch]);

  const { listingDataDetails } = useSelector(
    (state) => state.getProductDetailsReducer
  );
  console.log(listingDataDetails, "datasdatasdatas");

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img
          src={listingDataDetails?.thumbnail}
          alt={listingDataDetails?.thumbnail}
          className="product-image"
        />
      </div>
      <div className="product-info-container">
        <h2 className="product-name">{listingDataDetails?.brand}</h2>
        <p className="product-description">{listingDataDetails?.description}</p>
        <p className="product-price">Price: ${listingDataDetails?.price}</p>
        <Button variant="outlined">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
