import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import "./HeaderMain.scss";
import logo from "../../assets/HomePage/Logo-black.png";
import accountImage from "../../assets/HomePage/header-account-image.png";
import play from "../../assets/HomePage/play-circle.png";
import HomeCarousel from "../Home-Carousel/HomeCarousel";

const HeaderMain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="header">
      <header>
        <div className="container">
          <div className="header-main">
            <div className="header-main__logo">
              <LazyLoadImage src={logo} />
            </div>
            <div className="header-main__links">
              <Link>Найти жилье</Link>
              <Link>Куда сходить?</Link>
              <Link>Туры</Link>
              <Link>Транспорт</Link>
            </div>
            <div className="header-main__options">
              <Form.Select>
                <option>USD</option>
                <option>UZS</option>
                <option>RUB</option>
              </Form.Select>
              <Form.Select>
                <option>Русский</option>
                <option>O`zbekcha</option>
                <option>English</option>
              </Form.Select>
              <Button>
                <img src={accountImage} alt="account-image" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section id="home">
        <div className="container">
          <div className="home-top">
            <div className="home-top__title">
              <h2>Собирай чемодан, остальное мы возьмем на себя</h2>
            </div>
            <div className="home-top__content">
              <p>
                Добро пожаловать на наш уникальный портал, который предоставляет
                полный спектр услуг для туристов в Узбекистане!{" "}
              </p>
              <div className="home-top__content__buttons">
                <Button className="home-button">Все отели</Button>
                  <Button className="play-video" variant="primary" onClick={handleShow}>
                    <img src={play} alt="" />
                    Посмотреть видео
                  </Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>EMEHMON</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* video */}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
          {/* <HomeCarousel /> */}
        </div>
      </section>
    </div>
  );
};

export default HeaderMain;
