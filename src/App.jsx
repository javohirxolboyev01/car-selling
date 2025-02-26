import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/AboutPage";
import CarPage from "./pages/Cars/CarPage";
import ServicesPage from "./pages/Services/ServicesPage";
import SignIn from "./pages/SignIn/SignIn";
// import { navbar } from "./utils/navabr";

const App = () => {
  // const publicRoutes = navbar.filter((route) => route.isPrivite === false);
  // const priviteRoute = navbar.filter((route) => route.isPrivite === true);
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/car" element={<CarPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/sigin" element={<SignIn />} />
        {/* <Route>
          {publicRoutes.map((value) => {
            return <Route path={value.path} element={value.element} />;
          })}
        </Route>
        <Route element={<Navbar />}>
          {priviteRoute.map((value) => {
            return <Route path={value.path} element={value.element} />;
          })}
        </Route> */}
      </Routes>
    </>
  );
};

export default App;
