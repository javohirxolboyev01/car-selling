import React from "react";
import { FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="head">
      {/* desktop navbar sectio */}

      <nav className=" container flex justify-between">
        <div className="flex items-center gap-2">
          <FaCar size={35} className="text-primary" />
          <NavLink to="/sigin" className="font-bold text-2xl">
            uzAuto
          </NavLink>
        </div>
        <div className=" flex items-conter gap-8 font-medium text-xl">
          <NavLink
            to="/home"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </NavLink>
          <NavLink
            to="/cars"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Our Cars
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </NavLink>
          <button className="btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
