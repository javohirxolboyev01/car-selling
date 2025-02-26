import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/About/AboutPage";
import CarPage from "../pages/Cars/CarPage";
import ServicesPage from "../pages/Services/ServicesPage";
import SignIn from "../pages/SignIn/SignIn";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    isPrivite: true,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    element: <AboutPage />,
    isPrivite: true,
  },
  {
    id: 3,
    title: "Cars",
    path: "/cars",
    element: <CarPage />,
    isPrivite: true,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    element: <ServicesPage />,
    isPrivite: true,
  },
  {
    id: 5,
    title: "Sign In",
    path: "/sign_in",
    element: <SignIn />,
    isPrivite: false,
  },
];
