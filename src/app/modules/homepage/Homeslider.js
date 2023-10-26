import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import img1 from "../../../assets/images/auth/banner1.jpg";
import img2 from "../../../assets/images/auth/banner2.jpg";
import img3 from "../../../assets/images/auth/banner3.jpg";
import img4 from "../../../assets/images/auth/banner4.jpeg";
import img5 from "../../../assets/images/auth/20262.jpg";

const bannerList = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box className="home_container">
      <Slider
        {...settings}
        arrows={false}
        className="homepage_slider awareness_wrapper"
      >
        {bannerList &&
          bannerList.map((bannerData, index) => {
            return (
              <Box
                component="img"
                key={index}
                sx={{
                  height: {
                    xs: "400px",
                    sm: "500px",
                    md: "800px",
                    lg: "900px",
                    xl: "900px",
                  },
                }}
                src={bannerData.image}
              />
            );
          })}
      </Slider>
      <div className="text_heading">
        <h1>Explore here</h1>
        <hr />
      </div>
    </Box>
  );
};

export default HomeSlider;
