/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import engFlag from "../assets/imgs/eng.png";
import arFlag from "../assets/imgs/Egypt.png";
import Logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";

function Header({ home, contact, work, service, about }) {
  let homeElement;
  let aboutElement;
  let workElement;
  let serviceElement;
  let contactElement;
  useEffect(() => {
    homeElement = document.getElementById("home");
    aboutElement = document.getElementById("about");
    workElement = document.getElementById("work");
    serviceElement = document.getElementById("service");
    contactElement = document.getElementById("contact");
  }, []);
  return (
    <header>
      <nav className="navbar p-0 fixed-top navbar-expand-lg nav-color">
        <div className="container">
          <Link className="navbar-brand">
            <img src={Logo} className="logo" alt="logo" />
            <Link className="fw-bolder text-white">T-Swiss</Link>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link text-white fw-bold fs-6"
                  aria-current="page"
                  onClick={() =>
                    homeElement?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {home ? home : "Home"}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white fw-bold fs-6"
                  onClick={() =>
                    aboutElement?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {about ? about : "About"}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white fw-bold fs-6"
                  onClick={() =>
                    workElement?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {work ? work : "Work"}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white fw-bold fs-6"
                  onClick={() => {
                    serviceElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {service ? service : "Service"}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white fw-bold fs-6"
                  onClick={() => {
                    contactElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {contact ? contact : "Contact"}
                </button>
              </li>
            </ul>
            <Link to="/english">
              <img
                src={engFlag}
                className="me-3 lang-flag"
                alt="english language"
              />
            </Link>
            <Link to="/">
              <img
                src={arFlag}
                className="me-3 lang-flag"
                alt="german language"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
