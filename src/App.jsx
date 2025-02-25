import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/AboutPage";
import CarPage from "./pages/Cars/CarPage";
import ServicesPage from "./pages/Services/ServicesPage";
import SignIn from "./pages/SignIn/SignIn";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cars" element={<CarPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
