import { useState } from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "./HeaderMain.scss";
import logo from "../../assets/HomePage/logo-black.png";
import accountImage from "../../assets/HomePage/header-account-image.png";
import play from "../../assets/HomePage/play-circle.png";
import HomeCarousel from "../Home-Carousel/HomeCarousel";
import currencyData from "../data/currency";
import languageData from "../data/language";
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

const HeaderMain = () => {
  const [isCurrency, setIsCurrencyValue] = useState("");
  const [isLanguage, setIsLanguageValue] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsCurrency, setIsCurrency] = useState(false);
  const [modalIsLanguage, setIsLanguage] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function afterCurrencyModal() {
    subtitle.style.color = "000";
  }

  function openCurrency() {
    setIsCurrency(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openLanguage() {
    setIsLanguage(true);
  }
  function closeLanguage() {
    setIsLanguage(false);
  }
  function closeCurrency() {
    setIsCurrency(false);
  }

  const handleCurrency = (event) => {
    setIsCurrencyValue(event.target.lastChild.textContent);
    setIsCurrency(false);
  };
  const handleLanguage = (event) => {
    setIsLanguageValue(event.target.lastChild.textContent);
    setIsLanguage(false);
  };
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div
      id="header"
      className={`your-component ${isRotated ? "rotated" : ""}`}
      onClick={handleRotate}
    >
      <header className="">
        <Navbar expand="lg" className=" justify-content-between">
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
                  <Button
                    className="currency-select"
                    variant="primary"
                    onClick={openCurrency}
                  >
                    {isCurrency ? isCurrency : "UZS"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                    >
                      <path
                        d="M1 1.66602L4.29289 4.95891C4.62623 5.29224 4.79289 5.45891 5 5.45891C5.20711 5.45891 5.37377 5.29224 5.70711 4.95891L9 1.66602"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                  <Modal
                    closeTimeoutMS={500}
                    id="video__modal"
                    isOpen={modalIsCurrency}
                    onAfterOpen={afterCurrencyModal}
                    onRequestClose={closeCurrency}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div className="container">
                      <button className="modal-close" onClick={closeCurrency}>
                        x
                      </button>
                      <div className="currency-modal">
                        <h3>Выберите валюту</h3>
                        <p>
                          Там, где это необходимо, цены будут конвертированы и
                          отображены в выбранной вами валюте. <br /> Валюта, в
                          которой вы заплатите, зависит от вашего бронирования.
                          Кроме того, может взиматься сервисный сбор.
                        </p>
                        <div className="currency-modal-head">
                          <h4>Рекомендовано для вас</h4>
                        </div>
                        <div className="currency-items">
                          {currencyData.slice(0, 5).map((i, item) => (
                            <Button onClick={handleCurrency}>
                              <h6>{i.text}</h6>
                              <p>{i.title}</p>
                            </Button>
                          ))}
                        </div>
                        <div className="currency-modal-head">
                          <h4>Все валюты</h4>
                        </div>
                        <div className="currency-items">
                          {currencyData.slice(2, 22).map((i, item) => (
                            <Button onClick={handleCurrency}>
                              <h6>{i.text}</h6>
                              <p>{i.title}</p>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Modal>
                  <Button
                    className="currency-select"
                    variant="primary"
                    onClick={openLanguage}
                  >
                    {isLanguage ? isLanguage : "O'zbek"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                    >
                      <path
                        d="M1 1.66602L4.29289 4.95891C4.62623 5.29224 4.79289 5.45891 5 5.45891C5.20711 5.45891 5.37377 5.29224 5.70711 4.95891L9 1.66602"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                  <Modal
                    closeTimeoutMS={500}
                    id="video__modal"
                    isOpen={modalIsLanguage}
                    onAfterOpen={afterCurrencyModal}
                    onRequestClose={closeLanguage}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div className="container">
                      <button className="modal-close" onClick={closeCurrency}>
                        x
                      </button>
                      <div className="currency-modal">
                        <h3>Выберите язык</h3>
                        <p>
                          Для вашего удобства мы предлагаем несколько основных
                          языков, рекомендуемых для использования на нашем
                          сайте. Некоторые переводы выполнены с помощью Google
                          Переводчика, могут не всегда быть идеальными.
                        </p>
                        <div className="currency-modal-head">
                          <h4>Рекомендуемый язык и регион</h4>
                        </div>
                        <div className="currency-items">
                          {languageData.slice(0, 5).map((i, item) => (
                            <Button
                              onClick={handleLanguage}
                              className="d-flex align-items-center gap-2 p-3"
                            >
                              <Image src={i.image} />
                              <p>{i.title}</p>
                            </Button>
                          ))}
                        </div>
                        <div className="currency-modal-head">
                          <h4>Все языки</h4>
                        </div>
                        <div className="currency-items">
                          {languageData.slice(2, 27).map((i, item) => (
                            <Button
                              onClick={handleLanguage}
                              className="d-flex align-items-center gap-2 p-3"
                            >
                              <Image src={i.image} />
                              <p>{i.title}</p>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Modal>
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
