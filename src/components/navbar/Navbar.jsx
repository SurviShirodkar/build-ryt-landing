import React from "react";
import "./navbar.scss";
import Logo from "./logo.png";
import images from "../../Assets/ExportImages";
import { Link } from "react-router-dom";

export default function Navbar({ isDark }) {
  const [dropdown, setDropdown] = React.useState(city[0].name);
  return (
    <div className={`navbar-section ${isDark && "dark-navbar"} `}>
      <nav className="navbar navbar-expand-lg  navbar-light ">
        <div className="container-fluid">
          <Link to="/">
            {" "}
            <img
              src={isDark ? images.logo : images.blacklogo}
              className="main-logo"
              alt="logo"
            ></img>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle dropdown-bg"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={images.location}
                    className="location-icon ml-3"
                    alt="loaction icon"
                  ></img>
                  {dropdown}
                  <img
                    src={images.arrowdown}
                    className="mx-3"
                    alt="loaction icon"
                  ></img>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {city.map((obj) => (
                    <p
                      className="dropdown-item"
                      onClick={() => setDropdown(obj.name)}
                    >
                      {obj.name}
                    </p>
                  ))}
                </div>
              </li>
              <li className="nav-item ">
                <Link to="/services" className="nav-link" href="#">
                  OUR SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">
                  OUR WORK
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/costcalculater" className="nav-link" href="#">
                  COST ESTIMATOR
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">
                  MORE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </div>
  );
}
const city = [
  {
    name: "Bangalore",
  },
  {
    name: "Goa",
  },
  {
    name: "Delhi",
  },
];
