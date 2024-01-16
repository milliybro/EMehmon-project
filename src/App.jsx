import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import LayoutHome from "./components/layout-home";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutHome />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
