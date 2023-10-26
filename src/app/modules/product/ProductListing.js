import React from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../redux/action/products/productAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [catogeries, setCatogeries] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCatogeries(event.target.value);
  };

  useEffect(() => {
    dispatch(productAction(catogeries));
  }, [dispatch, catogeries]);

  const { listingData } = useSelector((state) => state.getProductsReducer);
  return (
    <>
      <div className="dropdownBx">
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={catogeries}
            onChange={handleChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value={"smartphones"}>smartphones</MenuItem>
            <MenuItem value={"laptops"}>laptops</MenuItem>
            <MenuItem value={"fragrances"}>fragrances</MenuItem>
            <MenuItem value={"sunglasses"}>sunglasses</MenuItem>
            <MenuItem value={"groceries"}>groceries</MenuItem>
            <MenuItem value={"tops"}>tops</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={4}>
        {listingData?.products?.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <div
              className="product"
              onClick={() =>
                navigate(`/product-listing/view-details/:${item.id}`)
              }
            >
              <Card sx={{ maxWidth: 800 }}>
                <CardMedia
                  component="img"
                  height="260"
                  image={item.thumbnail}
                  alt={item.thumbnail}
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title.slice(0, 30)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description.slice(0, 60)}
                  </Typography>
                </CardContent>
                <CardActions className="footer-card">
                  <div className="left-content">
                    <Typography gutterBottom variant="h6" component="div">
                      ${item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.rating.count}
                    </Typography>
                  </div>
                  <div className="btn-right">
                    <Button
                      variant="outlined"
                      endIcon={<AddShoppingCartIcon />}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardActions>
              </Card>
              <div className="wishlist">
                <IconButton aria-label="add to favorites" variant="outlined">
                  <PlaylistAddRoundedIcon />
                </IconButton>
                <IconButton aria-label="add to favorites" variant="outlined">
                  <FavoriteRoundedIcon />
                </IconButton>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductListing;
