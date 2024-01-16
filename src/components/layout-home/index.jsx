import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import HeaderMain from "./Header-main";

const LayoutHome = () => {
  return (
    <Fragment>
      <HeaderMain />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default LayoutHome;
