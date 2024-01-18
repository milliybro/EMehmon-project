import { useState } from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./HeaderMain.scss";
import logo from "../../assets/HomePage/logo-black.png";
import accountImage from "../../assets/HomePage/header-account-image.png";
import play from "../../assets/HomePage/play-circle.png";
import HomeCarousel from "../Home-Carousel/HomeCarousel";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Modal.setAppElement('#yourAppElement');

const HeaderMain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="header">
      <header className="">
      <Navbar
          expand="lg"
          className=" justify-content-between"
        >
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <LazyLoadImage src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav "
              className="justify-content-between"
            >
              <Nav className="m-auto">
                <div className="header-main__links">
                  <Link>Найти жилье</Link>
                  <Link>Куда сходить?</Link>
                  <Link>Туры</Link>
                  <Link>Транспорт</Link>
                </div>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse
              id="basic-navbar-nav "
              className="justify-content-between"
            >
              <Nav className="m-auto menu">
                <div className="header-main__options justify-content-end">
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <div className="container">
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
            <div className="header-res">
              <Link>Найти жилье</Link>
              <Link>Куда сходить?</Link>
              <Link>Туры</Link>
              <Link>Транспорт</Link>
            </div>
          </div>
        </div> */}
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
                <Button
                  className="play-video"
                  variant="primary"
                  onClick={openModal}
                >
                  <img src={play} alt="" />
                  Посмотреть видео
                </Button>
                <div style={{ transition: "2s" }}>
                  <Modal
                    id="video__modal"
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button className="modal-close" onClick={closeModal}>
                      x
                    </button>
                    <video width={1000} autoPlay>
                      <source
                        src="/src/assets/videos/emehmon__intro_en.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <HomeCarousel />
        </div>
      </section>
    </div>
  );
};

export default HeaderMain;
