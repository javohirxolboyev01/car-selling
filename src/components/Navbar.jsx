import React from "react";
import { FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { navbar } from "../utils/navabr";

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
          {/* {navbar.map((item) => {
            return (
              <NavLink
                className="hover:text-primary transition duration-200 ease-linear"
                key={item.id}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "coral" : "white",
                  };
                }}
                to={item.path}
              >
                {item.title}
              </NavLink>
            );
          })} */}
          <NavLink
            className="hover:text-primary transition duration-200 ease-linear"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-primary transition duration-200 ease-linear"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:text-primary transition duration-200 ease-linear"
            to="/car"
          >
            Car sale
          </NavLink>
          <NavLink
            className="hover:text-primary transition duration-200 ease-linear"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="hover:text-primary transition duration-200 ease-linear"
            to="/sign"
          >
            SignIn
          </NavLink>

          <button className="btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
