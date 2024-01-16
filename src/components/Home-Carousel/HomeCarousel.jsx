import { Fragment } from "react";
// import OwlCarousel from 'react-owl-carousel';


const HomeCarousel = () => {
   const options = {
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 3
          }
      }
  }
  return (
    <Fragment>
      {/* <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
      </OwlCarousel> */}
      ;
    </Fragment>
  );
};

export default HomeCarousel;
