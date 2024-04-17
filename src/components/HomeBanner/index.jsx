import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeBannerItem from "./HomeBannerItem";

function HomeBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
        <HomeBannerItem/>
    // <div className="slider-container">
    //   <Slider {...settings}>
    //   </Slider>
    // </div>
  );
}

export default HomeBanner;
