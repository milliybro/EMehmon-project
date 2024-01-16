import React from "react";
import Slider from "react-slick";
import "./TouristCarousel.scss";
import TouristComment from "../data/tourist-card";
import { Image } from "react-bootstrap";
import rating from "../../assets/tourist/rating.png"

const TouristCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section id="tourist">
      <div className="container">
        <div className="tourist-header">
          <h2>Что думают о нас туристы?</h2>
        </div>
        <Slider {...settings} className="tourist__items">
          {TouristComment.map((card, index) => (
            <div className="tourists-card" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <path
                  d="M9.4987 0.837571V4.24912C9.4987 4.7118 9.11528 5.08669 8.64229 5.08669C6.95474 5.08669 6.03678 6.77981 5.90956 10.1215H8.64229C9.11528 10.1215 9.4987 10.4967 9.4987 10.9592V18.1625C9.4987 18.625 9.11528 18.9999 8.64229 18.9999H1.35623C0.883061 18.9999 0.5 18.6247 0.5 18.1625V10.9592C0.5 9.3573 0.664887 7.88726 0.989933 6.58947C1.3233 5.25876 1.83503 4.09526 2.51044 3.13118C3.20544 2.1404 4.07478 1.36292 5.09452 0.82129C6.12114 0.276379 7.31499 0 8.64259 0C9.11528 0 9.4987 0.374889 9.4987 0.837571ZM20.5435 5.08675C21.0163 5.08675 21.4 4.71151 21.4 4.24918V0.83763C21.4 0.374948 21.0163 5.85352e-05 20.5435 5.85352e-05C19.2165 5.85352e-05 18.0224 0.276496 16.9962 0.821348C15.9763 1.36298 15.1064 2.14046 14.4113 3.13124C13.7361 4.09532 13.2244 5.25888 12.891 6.58988C12.5661 7.88808 12.4012 9.35812 12.4012 10.9593V18.1626C12.4012 18.6251 12.7848 19 13.2576 19H20.5435C21.0162 19 21.3996 18.6248 21.3996 18.1626V10.9592C21.3996 10.4968 21.0163 10.1215 20.5435 10.1215H17.8497C17.975 6.77987 18.8796 5.08675 20.5435 5.08675Z"
                  fill="#777E90"
                  fill-opacity="0.7"
                />
              </svg>
              <h5>{card.text}</h5>
              <div className="line"></div>
              <div className="tourist-info">
               <Image src={card.image}  />
               <div className="tourist-info__name">
                  <h4>{card.name}</h4>
                  <Image src={rating} />
               </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TouristCarousel;
