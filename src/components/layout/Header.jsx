import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./Header.scss";
import logo from "../../assets/HomePage/Logo-black.png";
import accountImage from "../../assets/HomePage/header-account-image.png";
import { Fragment } from "react";


const Header = () => {
  return (
   <Fragment>

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
               Войти</Button>
          </div>
        </div>
      </div>
    </header>
    
   </Fragment>
  );
};

export default Header;
