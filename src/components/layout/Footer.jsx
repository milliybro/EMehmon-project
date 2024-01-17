import "./Footer.scss";
import logo from "../../assets/HomePage/Logo.png";
import { Image } from "react-bootstrap";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <Image src={logo} />
        </div>
        <div className="footer-items">
          <div className="footer-items__info">
            <p>Лучшая платформа для бронирования отелей в Узбекистане</p>
            <div className="socials">
              <Image src={facebook} />
              <Image src={instagram} />
              <Image src={telegram} />
            </div>
          </div>
          <ul>
            <li>
              <NavLink to="#">Регионы</NavLink>
            </li>
            <li>
              <NavLink to="#">Города</NavLink>
            </li>
            <li>
              <NavLink to="#">Районы</NavLink>
            </li>
            <li>
              <NavLink to="#">Аэропорты</NavLink>
            </li>
            <li>
              <NavLink to="#">Ориентиры</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="#">Отели</NavLink>
            </li>
            <li>
              <NavLink to="#">Дома и апартаменты</NavLink>
            </li>
            <li>
              <NavLink to="#">Апартаменты/квартиры</NavLink>
            </li>
            <li>
              <NavLink to="#">Курортные отели</NavLink>
            </li>
            <li>
              <NavLink to="#">Хостелы</NavLink>
            </li>
            <li>
              <NavLink to="#">Гостевые дома</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="#">Уникальное жилье</NavLink>
            </li>
            <li>
              <NavLink to="#">Отзывы</NavLink>
            </li>
            <li>
              <NavLink to="#">Сообщество путешественников</NavLink>
            </li>
            <li>
              <NavLink to="#">Сезонные спецпредложения</NavLink>
            </li>
            <li>
              <NavLink to="#">Поиск автомобилей</NavLink>
            </li>
            <li>
              <NavLink to="#">Гостевые домаУправлять бронированиями</NavLink>
            </li>
          </ul>
        </div>
      </div>
        <div className="line"></div>
        <div className="footer-bottom">
          <h5>E-Mehmon © 2023. Все права защищены. </h5>
        </div>
    </footer>
  );
};

export default Footer;
