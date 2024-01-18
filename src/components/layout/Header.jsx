import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
import logo from "../../assets/HomePage/Logo.png";
import accountImage from "../../assets/HomePage/header-account-image.png";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <Navbar
          expand="lg"
          className="bg-body-tertiary justify-content-between"
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
                <div className="header__links">
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
                <div className="header__options justify-content-end">
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

      </header>
    </Fragment>
  );
};

export default Header;
