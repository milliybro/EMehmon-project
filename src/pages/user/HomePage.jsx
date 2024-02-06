import { Fragment, React, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Modal, Tab, Tabs, TextField } from "@mui/material";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Typography from "@mui/material/Typography";
import "./HomePage.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import step from "../../assets/HomePage/step-left.png";
import HousesCard from "../../components/Cards/HousesCard";
import houses from "../../components/data/houses-card";
import Joining from "../../components/joining/Joining";
import SeasonCarousel from "../../components/Cards/SeasonCarousel";
import TouristCarousel from "../../components/Cards/TouristCarousel";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Button } from "react-bootstrap";
import { Select } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import doma from "../../components/data/doma";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { LicenseInfo } from "@mui/x-data-grid-pro";
import CRangePicker from "../../components/DatePickers";

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

const style = {
  position: "absolute",
  top: "180px",
  left: "820px",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
};

LicenseInfo.setLicenseKey(
  "j0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e"
);
const HomePage = () => {
  const [value, setValue] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isCity, setIsCity] = useState(false);
  const [countAdult, setCountAdult] = useState(1);
  const [countChildren, setCountChildren] = useState(0);
  const [countRooms, setCountRooms] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const increaseAdult = () => {
    setCountAdult(countAdult + 1);
  };

  const decreaseAdult = () => {
    setCountAdult(countAdult - 1);
  };

  const increaseChildren = () => {
    setCountChildren(countChildren + 1);
  };

  const decreaseChildren = () => {
    setCountChildren(countChildren - 1);
  };

  const increaseRooms = () => {
    setCountRooms(countRooms + 1);
  };

  const decreaseRooms = () => {
    setCountRooms(countRooms - 1);
  };
  if (countRooms > countAdult) {
    setCountAdult(countRooms);
  }
  if (countRooms == countAdult) {
  }
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
                <div className="hoteli">
                  <div className="cities pt-1 d-flex flex-column gap-2">
                    <label htmlFor="Длительность пребывания">
                      Куда хотите поехать?
                    </label>
                    <Select
                      showSearch
                      style={{
                        width: "300px",
                        height: "50px",
                        borderRadius: "20px",
                      }}
                      placeholder="Куда вы хотите поехать?"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "г.Ташкент",
                        },
                        {
                          value: "2",
                          label: "Андижан",
                        },
                        {
                          value: "3",
                          label: "Бухара",
                        },
                        {
                          value: "4",
                          label: "Джизак",
                        },
                        {
                          value: "5",
                          label: "Фергана",
                        },
                        {
                          value: "6",
                          label: "Кашкадарья",
                        },
                        {
                          value: "7",
                          label: "Каракалпакстан",
                        },
                        {
                          value: "8",
                          label: "Навои",
                        },
                        {
                          value: "9",
                          label: "Самарканд",
                        },
                        {
                          value: "10",
                          label: "Сырдарья",
                        },
                        {
                          value: "11",
                          label: "Сурхандарьинская",
                        },
                        {
                          value: "12",
                          label: "о.Ташкент",
                        },
                        {
                          value: "13",
                          label: "Хорезм",
                        },
                      ]}
                    />
                    <span className="point">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                      >
                        <path
                          d="M4 17C2.17107 17.4117 1 18.0443 1 18.7537C1 19.9943 4.58172 21 9 21C13.4183 21 17 19.9943 17 18.7537C17 18.0443 15.8289 17.4117 14 17"
                          stroke="#B7BFD5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.5 8C11.5 9.38071 10.3807 10.5 9 10.5C7.61929 10.5 6.5 9.38071 6.5 8C6.5 6.61929 7.61929 5.5 9 5.5C10.3807 5.5 11.5 6.61929 11.5 8Z"
                          stroke="#B7BFD5"
                          stroke-width="1.5"
                        />
                        <path
                          d="M10.2574 16.4936C9.92012 16.8184 9.46932 17 9.00015 17C8.53099 17 8.08018 16.8184 7.7429 16.4936C4.6543 13.5008 0.51519 10.1575 2.53371 5.30373C3.6251 2.67932 6.24494 1 9.00015 1C11.7554 1 14.3752 2.67933 15.4666 5.30373C17.4826 10.1514 13.3536 13.5111 10.2574 16.4936Z"
                          stroke="#B7BFD5"
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>
                    <div className="city-content">
                      {isCity && <div className="clickmenu"></div>}
                    </div>
                  </div>
                  <div className="position-relative calen">
                    <CRangePicker />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={["SingleInputDateRangeField"]}
                        className="input-value position-relative"
                      >
                        <label htmlFor="">Длительность пребывания </label>
                        <DateRangePicker
                          slots={{ field: SingleInputDateRangeField }}
                          renderInput={(startProps, endProps) => (
                            <>
                              <input
                                {...startProps}
                                placeholder="Start Date" // Customize the start date placeholder
                              />
                              <span style={{ margin: "0 8px" }}>to</span>
                              <input
                                {...endProps}
                                placeholder="End Date" // Customize the end date placeholder
                              />
                            </>
                          )}
                        />
                        <span className="calendar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M17 1V3M5 1V3"
                              stroke="#B7BFD5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.9955 12H11.0045M10.9955 16H11.0045M14.991 12H15M7 12H7.00897M7 16H7.00897"
                              stroke="#B7BFD5"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.5 7H19.5"
                              stroke="#B7BFD5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.5 11.2432C1.5 6.88594 1.5 4.70728 2.75212 3.35364C4.00424 2 6.01949 2 10.05 2H11.95C15.9805 2 17.9958 2 19.2479 3.35364C20.5 4.70728 20.5 6.88594 20.5 11.2432V11.7568C20.5 16.1141 20.5 18.2927 19.2479 19.6464C17.9958 21 15.9805 21 11.95 21H10.05C6.01949 21 4.00424 21 2.75212 19.6464C1.5 18.2927 1.5 16.1141 1.5 11.7568V11.2432Z"
                              stroke="#B7BFD5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2 7H20"
                              stroke="#B7BFD5"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </DemoContainer>
                    </LocalizationProvider> */}
                  </div>
                  <div className="click">
                    <div className="dropdown peoples" ref={dropdownRef}>
                      <label htmlFor="">Кол-во гостей</label>

                      <button
                        className="people-count d-flex"
                        onClick={toggleDropdown}
                      >
                        {" "}
                        {countAdult}{" "}
                        {countAdult === 1 ? "взрослый" : "взрослых"}{" "}
                        {countChildren} Детей {countRooms}{" "}
                        {countRooms === 1 ? "номер" : "номера"}
                      </button>
                      <span className="nomer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                        >
                          <path
                            d="M18.6161 18H19.1063C20.2561 18 21.1707 17.4761 21.9919 16.7436C24.078 14.8826 19.1741 13 17.5 13M15.5 3.06877C15.7271 3.02373 15.9629 3 16.2048 3C18.0247 3 19.5 4.34315 19.5 6C19.5 7.65685 18.0247 9 16.2048 9C15.9629 9 15.7271 8.97627 15.5 8.93123"
                            stroke="#B7BFD5"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M4.48131 14.1112C3.30234 14.743 0.211137 16.0331 2.09388 17.6474C3.01359 18.436 4.03791 19 5.32572 19H12.6743C13.9621 19 14.9864 18.436 15.9061 17.6474C17.7889 16.0331 14.6977 14.743 13.5187 14.1112C10.754 12.6296 7.24599 12.6296 4.48131 14.1112Z"
                            stroke="#B7BFD5"
                            stroke-width="1.5"
                          />
                          <path
                            d="M13 5.5C13 7.70914 11.2091 9.5 9 9.5C6.79086 9.5 5 7.70914 5 5.5C5 3.29086 6.79086 1.5 9 1.5C11.2091 1.5 13 3.29086 13 5.5Z"
                            stroke="#B7BFD5"
                            stroke-width="1.5"
                          />
                        </svg>
                      </span>
                      {isOpen && (
                        <div className="dropdown-content">
                          <div className="clickmenu">
                            <div className="menu-content">
                              <div className="menu-item">
                                <div className="d-flex flex-column ">
                                  <h6>Взрослых</h6>
                                  <p>13 лет и выше</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center bordera">
                                  {countAdult === 1 ? (
                                    <button
                                      className="decrease"
                                      disabled
                                      title="Decrease"
                                      onClick={decreaseAdult}
                                      value={1}
                                    >
                                      <AiOutlineMinus />
                                    </button>
                                  ) : (
                                    <button
                                      className="decrease"
                                      title="Decrease"
                                      onClick={decreaseAdult}
                                    >
                                      <AiOutlineMinus />
                                    </button>
                                  )}

                                  <span>{countAdult}</span>
                                  <button
                                    className="increase"
                                    title="Increase"
                                    onClick={increaseAdult}
                                  >
                                    <AiOutlinePlus />
                                  </button>
                                </div>
                              </div>
                              <hr />
                              <div className="menu-item">
                                <div className="d-flex flex-column ">
                                  <h6>Детей</h6>
                                  <p>До 12 лет </p>
                                </div>
                                <div className="d-flex gap-3 align-items-center bordera">
                                  {countChildren === 0 ? (
                                    <button
                                      className="decrease"
                                      disabled
                                      title="Decrease"
                                      onClick={decreaseChildren}
                                      value={0}
                                    >
                                      <AiOutlineMinus />
                                    </button>
                                  ) : (
                                    <button
                                      className="decrease"
                                      title="Decrease"
                                      onClick={decreaseChildren}
                                    >
                                      <AiOutlineMinus />
                                    </button>
                                  )}

                                  <span>{countChildren}</span>
                                  <button
                                    className="increase"
                                    title="Increase"
                                    onClick={increaseChildren}
                                  >
                                    <AiOutlinePlus />
                                  </button>
                                </div>
                              </div>
                              <hr />
                              <div className="menu-item">
                                <div className="d-flex flex-column ">
                                  <h6>Номера</h6>
                                  <p>Минимум 1</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center bordera">
                                  {countRooms === 1 ? (
                                    <button
                                      className="decrease"
                                      disabled
                                      title="Decrease"
                                      onClick={decreaseRooms}
                                      value={1}
                                    >
                                      <AiOutlineMinus />
                                    </button>
                                  ) : (
                                    <button
                                      className="decrease"
                                      title="Decrease"
                                      onClick={decreaseRooms}
                                    >
                                      <AiOutlineMinus />
                                    </button>
                                  )}

                                  <span>{countRooms}</span>
                                  <button
                                    className="increase"
                                    title="Increase"
                                    onClick={increaseRooms}
                                  >
                                    <AiOutlinePlus />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* <nav
                      ref={dropdownRef}
                      className={`menu-drop ${
                        isActive ? "active" : "inactive"
                      }`}
                    >
                      <div className="clickmenu">
                        <div className="menu-content">
                          <div className="menu-item">
                            <div className="d-flex flex-column ">
                              <h6>Взрослых</h6>
                              <p>13 лет и выше</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center bordera">
                              {countAdult === 1 ? (
                                <button
                                  className="decrease"
                                  disabled
                                  title="Decrease"
                                  onClick={decreaseAdult}
                                  value={1}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="decrease"
                                  title="Decrease"
                                  onClick={decreaseAdult}
                                >
                                  -
                                </button>
                              )}

                              <span>{countAdult}</span>
                              <button
                                className="increase"
                                title="Increase"
                                onClick={increaseAdult}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <hr />
                          <div className="menu-item">
                            <div className="d-flex flex-column ">
                              <h6>Детей</h6>
                              <p>До 12 лет </p>
                            </div>
                            <div className="d-flex gap-3 align-items-center bordera">
                              {countChildren === 0 ? (
                                <button
                                  className="decrease"
                                  disabled
                                  title="Decrease"
                                  onClick={decreaseChildren}
                                  value={0}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="decrease"
                                  title="Decrease"
                                  onClick={decreaseChildren}
                                >
                                  -
                                </button>
                              )}

                              <span>{countChildren}</span>
                              <button
                                className="increase"
                                title="Increase"
                                onClick={increaseChildren}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <hr />
                          <div className="menu-item">
                            <div className="d-flex flex-column ">
                              <h6>Номера</h6>
                              <p>Минимум 1</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center bordera">
                              {countRooms === 1 ? (
                                <button
                                  className="decrease"
                                  disabled
                                  title="Decrease"
                                  onClick={decreaseRooms}
                                  value={1}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="decrease"
                                  title="Decrease"
                                  onClick={decreaseRooms}
                                >
                                  -
                                </button>
                              )}

                              <span>{countRooms}</span>
                              <button
                                className="increase"
                                title="Increase"
                                onClick={increaseRooms}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav> */}
                    <Modal
                      closeTimeoutMS={3000}
                      className="modal-age"
                      open={open}
                      onClose={handleClose}
                    >
                      <Box sx={style}>
                        <div className="clickmenu">
                          <div className="menu-content">
                            <div className="menu-item">
                              <div className="d-flex flex-column ">
                                <h6>Взрослых</h6>
                                <p>13 лет и выше</p>
                              </div>
                              <div className="d-flex gap-3 align-items-center bordera">
                                {countAdult === 1 ? (
                                  <button
                                    className="decrease"
                                    disabled
                                    title="Decrease"
                                    onClick={decreaseAdult}
                                    value={1}
                                  >
                                    -
                                  </button>
                                ) : (
                                  <button
                                    className="decrease"
                                    title="Decrease"
                                    onClick={decreaseAdult}
                                  >
                                    -
                                  </button>
                                )}

                                <span>{countAdult}</span>
                                <button
                                  className="increase"
                                  title="Increase"
                                  onClick={increaseAdult}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <hr />
                            <div className="menu-item">
                              <div className="d-flex flex-column ">
                                <h6>Детей</h6>
                                <p>До 12 лет </p>
                              </div>
                              <div className="d-flex gap-3 align-items-center bordera">
                                {countChildren === 0 ? (
                                  <button
                                    className="decrease"
                                    disabled
                                    title="Decrease"
                                    onClick={decreaseChildren}
                                    value={0}
                                  >
                                    -
                                  </button>
                                ) : (
                                  <button
                                    className="decrease"
                                    title="Decrease"
                                    onClick={decreaseChildren}
                                  >
                                    -
                                  </button>
                                )}

                                <span>{countChildren}</span>
                                <button
                                  className="increase"
                                  title="Increase"
                                  onClick={increaseChildren}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <hr />
                            <div className="menu-item">
                              <div className="d-flex flex-column ">
                                <h6>Номера</h6>
                                <p>Минимум 1</p>
                              </div>
                              <div className="d-flex gap-3 align-items-center bordera">
                                {countRooms === 1 ? (
                                  <button
                                    className="decrease"
                                    disabled
                                    title="Decrease"
                                    onClick={decreaseRooms}
                                    value={1}
                                  >
                                    -
                                  </button>
                                ) : (
                                  <button
                                    className="decrese"
                                    title="Decrease"
                                    onClick={decreaseRooms}
                                  >
                                    -
                                  </button>
                                )}

                                <span>{countRooms}</span>
                                <button
                                  className="increase"
                                  title="Increase"
                                  onClick={increaseRooms}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Modal>
                    {isShown && (
                      <div className="clickmenu">
                        <div className="menu-content">
                          <div className="menu-item">
                            <div className="d-flex flex-column ">
                              <h6>Взрослых</h6>
                              <p>13 лет и выше</p>
                            </div>

                            <div className="d-flex gap-3 align-items-center bordera">
                              {countAdult === 1 ? (
                                <button
                                  className="decrease"
                                  disabled
                                  title="Decrease"
                                  onClick={decreaseAdult}
                                  value={1}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="decrease"
                                  title="Decrease"
                                  onClick={decreaseAdult}
                                >
                                  -
                                </button>
                              )}

                              <span>{countAdult}</span>
                              <button
                                className="increase"
                                title="Increase"
                                onClick={increaseAdult}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <hr />
                          <div className="menu-item">
                            <div className="d-flex flex-column ">
                              <h6>Детей</h6>
                              <p>До 12 лет </p>
                            </div>
                            <div className="d-flex gap-3 align-items-center bordera">
                              {countChildren === 0 ? (
                                <button
                                  className="decrease"
                                  disabled
                                  title="Decrease"
                                  onClick={decreaseChildren}
                                  value={0}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="decrease"
                                  title="Decrease"
                                  onClick={decreaseChildren}
                                >
                                  -
                                </button>
                              )}

                              <span>{countChildren}</span>
                              <button
                                className="increase"
                                title="Increase"
                                onClick={increaseChildren}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <hr />
                          <div className="menu-item">
                            <div className="d-flex flex-column ">
                              <h6>Номера</h6>
                              <p>Минимум 1</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center bordera">
                              {countRooms === 1 ? (
                                <button
                                  className="decrease"
                                  disabled
                                  title="Decrease"
                                  onClick={decreaseRooms}
                                  value={1}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="decrese"
                                  title="Decrease"
                                  onClick={decreaseRooms}
                                >
                                  -
                                </button>
                              )}

                              <span>{countRooms}</span>
                              <button
                                className="increase"
                                title="Increase"
                                onClick={increaseRooms}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {isShown && <Box />}
                  </div>
                  <Button className="d-flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M16.5 16.5L21 21"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Начать поиск
                  </Button>
                </div>
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
          <div className="step__header section-header mt-5">
            <h3>Простые 3 шага для вашего идеального путешествия</h3>
            <p>Упростите свои планы для путешествия – с нами это легко!</p>
          </div>
          <div className="step__main">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              <LazyLoadImage src={step} />
            </div>
            <div
              className="step__main-steps"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
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
      <section id="favourite-houses" data-aos="fade-up" data-aos-duration="900">
        <div className="container">
          <div className="houses__header section-header">
            <h3>Популярные отели Узбекистана</h3>
            <p>Упростите свои планы для путешествия – с нами это легко!</p>
          </div>
          <div className="houses-items">
            {houses.map((item, i) => (
              <HousesCard key={i} {...item} />
            ))}
          </div>
          <div className="houses-items__mobile">
            {houses.slice(0, 4).map((item, i) => (
              <HousesCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section data-aos="fade-up" data-aos-duration="900">
        <Joining />
      </section>
      <section
        id="favourite-houses"
        className="mb-5"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="container">
          <div className="houses__header section-header">
            <h3>Дома, которые нравятся гостям</h3>
            <p>У нас есть всё: от замков и вилл до плавучих отелей и иглу</p>
          </div>
          <div className="houses-items">
            {doma.map((item, i) => (
              <HousesCard key={i} {...item} />
            ))}
          </div>
          <div className="houses-items__mobile">
            {doma.slice(0, 4).map((item, i) => (
              <HousesCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section data-aos="fade-up" data-aos-duration="900">
        <SeasonCarousel />
      </section>
      <section data-aos="fade-up" data-aos-duration="900">
        <TouristCarousel />
      </section>
    </Fragment>
  );
};

export default HomePage;
