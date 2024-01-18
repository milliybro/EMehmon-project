import React from "react";
import Slider from "react-slick";
import "./SeasonCarousel.scss";
import hotelSeasons from "../data/seasons-card";

const SeasonCarousel = () => {
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
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
        <div className="season-header">
          <h2>Сезонные предложения</h2>
        </div>
        <Slider {...settings} className="season__items">
          {hotelSeasons.map((card, index) => (
            <div className="seasons-card" key={index}>
              <img alt={card.title} src={card.image} width="100" height="100" />
              <span className="discount">Скидка {card.discount}%</span>
              <h5>{card.title}</h5>
              <p>от ${card.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SeasonCarousel;
