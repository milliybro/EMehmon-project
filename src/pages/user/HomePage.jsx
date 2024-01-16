import { Fragment, React, useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./HomePage.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

import step from "../../assets/HomePage/step-left.png";
import HousesCard from "../../components/Cards/HousesCard";
import houses from "../../components/data/houses-card";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const HomePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <Fragment>
      <section id="hotel_search">
        <div className="container">
          <div className="hotels">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Отели" {...a11yProps(0)} />
                  <Tab label="Туры" {...a11yProps(1)} />
                  <Tab label="Авиабилеты" {...a11yProps(2)} />
                  <Tab label="Транспорт" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                Item One
                <button onChange={handleChange}>Next</button>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Item Four
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </section>
      <section id="step_holiday">
        <div className="container">
          <div className="step__header section-header">
            <h3>Простые 3 шага для вашего идеального путешествия</h3>
            <p>Упростите свои планы для путешествия – с нами это легко!</p>
          </div>
          <div className="step__main">
            <LazyLoadImage src={step} />
            <div className="step__main-steps">
              <div className="step">
                <span className="step-number">01</span>
                <h4>Регистрация</h4>
                <p>
                  Зарегистрируйтесь на нашем сайте, чтобы начать путешествие.
                  Укажите свое имя, адрес электронной почты и пароль, чтобы
                  создать учетную запись.
                </p>
              </div>
              <div className="step">
                <span className="step-number">02</span>
                <h4>Выбор отели и даты</h4>
                <p>
                  Выберите желаемое место проживания и укажите даты вашего
                  пребывания. Просматривайте доступные варианты и добавляйте их
                  в корзину.
                </p>
              </div>
              <div className="step">
                <span className="step-number">03</span>
                <h4>Бронирование и оплата</h4>
                <p>
                  Перейдите к корзине, где вы сможете проверить и подтвердить
                  ваш выбор. Затем выберите удобный способ оплаты и завершите
                  бронирование. Готово, ваше путешествие официально начато!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="favourite-houses">
        <div className="container">
          <div className="houses__header section-header">
            <h3>Дома, которые нравятся гостям</h3>
            <p>Упростите свои планы для путешествия – с нами это легко!</p>
          </div>
          {houses.map((house, i) => {
            <HousesCard {...house} key={i}></HousesCard>;
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
