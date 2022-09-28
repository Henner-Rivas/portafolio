import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/logo.png";
import ButtonContacta from "../ButtonContacta";
import { Context } from "../../context";
import DarkMode from "../DarkMode";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const claseMenu = menu ? "is-active" : false;
  const claseMenuLinks = menu ? "active" : false;

  const { setMode, mode } = useContext(Context);

  function handleDarkMode(event) {
    if (event.target.checked) {
      localStorage.setItem("darkMode", true);
      setMode(true);
    } else {
      localStorage.removeItem("darkMode");
      setMode(false);
    }
  }

  return (
    <nav className={`navbar  ${mode ? "dark" : ""}`}>
      <div className="navbar_container">
        <a href="/" id="navbar_logo">
          <img src={logo} alt="" />
        </a>

        <DarkMode clase="contaier_switch2 lo" handleDarkMode={handleDarkMode} />

        <div
          className={
            mode
              ? `navbar__toggle dark ${claseMenu}`
              : `navbar__toggle ${claseMenu}`
          }
          id="mobile-menu"
          onClick={() => setMenu(!menu)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar__menu ${claseMenuLinks}`}>
          <li className="navbar__item">
            <NavLink
              to="/"
              className={`navbar__links`}
              onClick={() => setMenu(!menu)}
            >
              Inicio
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/portafolio"
              className="navbar__links"
              onClick={() => setMenu(!menu)}
            >
              Portafolio
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/servicios"
              className="navbar__links"
              onClick={() => setMenu(!menu)}
            >
              Servicios
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/blog"
              className="navbar__links"
              onClick={() => setMenu(!menu)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactame" onClick={() => setMenu(!menu)}>
              <ButtonContacta />
            </NavLink>
          </li>

          <DarkMode clase="contaier_switch1" handleDarkMode={handleDarkMode} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
