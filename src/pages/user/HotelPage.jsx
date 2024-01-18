import { Breadcrumb } from "antd";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import "./HotelPage.scss";
import save from "../../assets/Hotels/save.png";
import share from "../../assets/Hotels/share.png";
import address from "../../assets/Hotels/address.png";

import hotel1 from "../../assets/Hotels/hotel1.png";
import hotel2 from "../../assets/Hotels/hotel2.png";
import hotel3 from "../../assets/Hotels/hotel3.png";
import hotel4 from "../../assets/Hotels/hotel4.png";
import hotelLogo from "../../assets/Hotels/hotel-logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@mui/material";
import hotel from "./../../components/data/facilities";
import CommentCarousel from "../../components/Cards/CommentCarousel";
import houses from "../../components/data/houses-card";
import HousesCard from "../../components/Cards/HousesCard";
import Joining from "../../components/joining/Joining";
import SeasonCarousel from "../../components/Cards/SeasonCarousel";
import TouristCarousel from "../../components/Cards/TouristCarousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

const HotelPage = () => {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 2;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  const [currentDate, setCurrentDate] = useState(getDate());
  const [date, setDate] = useState(dayjs(currentDate));
  const [age, setAge] = useState("");
  let { hotelId } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var now = new Date();
  var datetime = now.toLocaleString();

  const personChange = (event) => {
    setAge(event.target.value);
  };
  const position = [41.505, 62.09];
  return (
    <Fragment>
      <div className="container">
        <div className="hotel-page__header">
          <Breadcrumb
            separator=">"
            items={[
              {
                title: "Главная",
                href: "/",
              },
              {
                title: "Отели Ташкента",
                href: "",
              },
              {
                title: `${hotelId}`,
                href: "#",
              },
            ]}
          />
        </div>
        <div className="hotel-page__info">
          <div className="hotel-name">
            <h1>Hotel Neptun Tashkent Pool&Spa</h1>
            <div className="hotel-share">
              <Link>
                <LazyLoadImage src={save} />
                Сохранить
              </Link>
              <Link>
                <LazyLoadImage src={share} />
                Поделиться
              </Link>
            </div>
          </div>
          <div className="hotel-address">
            <h4>
              <LazyLoadImage src={address} />8 ул. Лянгар, Ташкент
            </h4>
          </div>
        </div>
        <div className="hotel-page__main">
          <div className="hotel-images">
            <LazyLoadImage src={hotel1} />
            <div className="hotel-images__row">
              <LazyLoadImage src={hotel2} />
              <LazyLoadImage src={hotel3} />
              <div className="more-image">
                <LazyLoadImage src={hotel4} />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.28065 12C9.28065 12.6962 9.55721 13.3639 10.0495 13.8562C10.5418 14.3484 11.2095 14.625 11.9057 14.625C12.6018 14.625 13.2695 14.3484 13.7618 13.8562C14.2541 13.3639 14.5307 12.6962 14.5307 12C14.5307 11.3038 14.2541 10.6361 13.7618 10.1438C13.2695 9.65156 12.6018 9.375 11.9057 9.375C11.2095 9.375 10.5418 9.65156 10.0495 10.1438C9.55721 10.6361 9.28065 11.3038 9.28065 12ZM22.0822 11.3953C19.8603 6.71484 16.5017 4.35938 11.9994 4.35938C7.49472 4.35938 4.13847 6.71484 1.91659 11.3977C1.82747 11.5864 1.78125 11.7925 1.78125 12.0012C1.78125 12.2099 1.82747 12.416 1.91659 12.6047C4.13847 17.2852 7.49706 19.6406 11.9994 19.6406C16.5041 19.6406 19.8603 17.2852 22.0822 12.6023C22.2627 12.2227 22.2627 11.782 22.0822 11.3953ZM11.9057 16.125C9.62753 16.125 7.78065 14.2781 7.78065 12C7.78065 9.72188 9.62753 7.875 11.9057 7.875C14.1838 7.875 16.0307 9.72188 16.0307 12C16.0307 14.2781 14.1838 16.125 11.9057 16.125Z"
                      fill="#2F3138"
                    />
                  </svg>
                  +25
                </span>
              </div>
            </div>
          </div>
          <div className="hotel-prices">
            <div className="hotel-prices__header">
              <div className="hotel-logo">
                <LazyLoadImage src={hotelLogo} />
                <h3>Meros Group</h3>
              </div>
              <div className="hotel-rating">
                <span>8.9</span>
                <p>(245 отзывов)</p>
              </div>
            </div>
            <div className="line"></div>.
            <div className="price-hotel">
              <h4>
                <span>от</span> $120 <span>/ночь</span>
              </h4>
            </div>
            <form action="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Заезд"
                    defaultValue={dayjs(`${datetime}`)}
                  />
                  <DatePicker
                    label="Выезд"
                    value={date}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Количество гостей
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={personChange}
                  >
                    <MenuItem value={1}>1 взрослых</MenuItem>
                    <MenuItem value={2}>2 взрослых</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button className="price-button" variant="contained">
                Просмотреть наличие мест{" "}
              </Button>
            </form>
            <p>Цены актуальны до 17 января, 2024 года</p>
          </div>
        </div>
        <div className="hotel-page__desc">
          <div className="only-desc">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Описание" {...a11yProps(0)} />
                  <Tab label="Наличие мест" {...a11yProps(1)} />
                  <Tab label="Что рядом?" {...a11yProps(2)} />
                  <Tab label="Дополнительные услуги" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className="hotel-description">
                  <h2>Описание отеля</h2>
                  <p>
                    Ощутите роскошь в ее лучших проявлениях, остановившись в
                    нашем потрясающем четырехспальном отеле в Ташкенте.
                    Расположенный в самом сердце города, наш отель предоставляет
                    уникальную возможность насладиться комфортом и роскошью.
                    Стильные номера с кондиционером оборудованы прекрасной
                    террасой, частным бассейном и захватывающими видами,
                    предоставляя проживающим незабываемый опыт. Этот элегантный
                    отель идеально подходит для групп, стремящихся к выдающемуся
                    уровню роскоши и полного расслабления. Вас ждет простор и
                    уединение в нашем отеле в Ташкенте, обеспечивающем высший
                    уровень сервиса <a href=""> читать далее</a>
                  </p>
                  <div className="line"></div>
                  <h2 style={{ marginTop: "32px" }}>Удобства отеля</h2>
                  <p>
                    Наш отель включает в себя уютные номера и общественные зоны
                    для комфортного отдыха, а также:
                  </p>
                  <div className="hotel-facilities">
                    {hotel.map((e) => (
                      <div className="hotel-card">
                        <span>
                          <LazyLoadImage src={e.image} />
                        </span>
                        <h5>{e.name}</h5>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{ marginTop: "32px", marginBottom: "32px" }}
                    className="line"
                  ></div>
                  <div className="hotel-comments">
                    <div className="comments-header">
                      <h2>Отзывы посетилетей</h2>
                      <a href="">Все отзывы </a>
                    </div>
                    <CommentCarousel />
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
          </div>
          <div className="only-map">
            <div>
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
              ></iframe>
            </div>
          </div>
        </div>
        <section id="favourite-houses">
          <div className="container">
            <div className="houses__header section-header">
              <h3 style={{ textAlign: "left", marginBottom: "-30px" }}>
                Похожие отели
              </h3>
            </div>
            <div className="houses-items">
              {houses.slice(0, 4).map((item, i) => (
                <HousesCard key={i} {...item} />
              ))}
            </div>
          </div>
        </section>
        <Joining />
        <SeasonCarousel />
        <TouristCarousel />
      </div>
    </Fragment>
  );
};

export default HotelPage;
