import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Previous</button>;
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Next</button>;
  };
  slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
