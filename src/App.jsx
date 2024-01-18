import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import LayoutHome from "./components/layout-home";
import Layout from "./components/layout";
import HotelPage from "./pages/user/HotelPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutHome />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<Layout />}>
          <Route path="hotels/:id" element={<HotelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
