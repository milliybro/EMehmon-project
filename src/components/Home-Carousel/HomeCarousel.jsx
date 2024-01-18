import React from "react";
import Slider from "react-slick";
import "./HomeCarousel.scss";
import houses from "../data/houses-card";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="season">
      <div className="container">
        <Slider {...settings} className="season__items">
          {houses.map((card, index) => (
            <div
              key={index}
              id="curve"
              className="card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.6285 6.00399L10.3246 5.3456L8.39557 1.23047C8.25148 0.923177 7.74807 0.923177 7.60399 1.23047L5.67549 5.3456L1.37167 6.00399C1.01817 6.05832 0.877004 6.48888 1.12492 6.74301L4.25158 9.95262L3.5125 14.4901C3.45358 14.8506 3.838 15.1211 4.15591 14.9441L8.00007 12.8164L11.8442 14.9446C12.1592 15.1199 12.5471 14.8547 12.4876 14.4907L11.7486 9.95321L14.8752 6.74359C15.1231 6.48888 14.9814 6.05832 14.6285 6.00399Z"
                    fill="#232E40"
                  />
                </svg>
                {card.rating}
              </span>
              <div
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  borderRadius: "24px"
                }}
              ></div>
              <div className="footer">
                <div className="connections"></div>
                <div className="info">
                  <h4>{card.name}</h4>
                  <h5>{card.address}</h5>
                </div>
              </div>
              <div className="card-blur"></div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeCarousel;
