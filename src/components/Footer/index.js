import React, { useContext } from "react";
import "./styles.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../../context";

const Footer = () => {
  const { mode } = useContext(Context);

  return (
    <>
      <div className={mode ? `separar dark` : "separar"}>
        {mode ? (
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 119.42583732057417,203.10047846889952 238.85167464114835,206.20095693779905 330,200 C 421.14832535885165,193.79904306220095 484.01913875598086,178.29665071770333 565,181 C 645.9808612440191,183.70334928229667 745.0717703349283,204.61244019138755 843,220 C 940.9282296650717,235.38755980861245 1037.6937799043062,245.25358851674645 1137,241 C 1236.3062200956938,236.74641148325355 1338.153110047847,218.37320574162678 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4e4e4eff"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        ) : (
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,400 C 0,400 0,200 0,200 C 119.42583732057417,203.10047846889952 238.85167464114835,206.20095693779905 330,200 C 421.14832535885165,193.79904306220095 484.01913875598086,178.29665071770333 565,181 C 645.9808612440191,183.70334928229667 745.0717703349283,204.61244019138755 843,220 C 940.9282296650717,235.38755980861245 1037.6937799043062,245.25358851674645 1137,241 C 1236.3062200956938,236.74641148325355 1338.153110047847,218.37320574162678 1440,200 C 1440,200 1440,400 1440,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0071e2ff"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        )}
      </div>
      <div className={mode ? "container__footer dark" : "container__footer"}>
        <div className="medio__footer">
          <div className="quien_soy">
            <h6>Henner Rivas Berrio</h6>
            <p>
              ingeniero en telecomunicaciones e informativa, desarrollador web
            </p>

            <div className="icons">
              <a
                href="https://www.instagram.com/hennerdev/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram fontSize="25px" className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/henner-rivas/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin fontSize="25px" className="icon" />
              </a>
              <a
                href="https://github.com/Henner-Rivas"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub fontSize="25px" className="icon" />
              </a>
            </div>
          </div>

          <div className="enlaces">
            <Link to="/" className="link">
              <div>
                <AiOutlineArrowRight className="icon" />
                <p>Acerca de mi</p>
              </div>
            </Link>
            <Link to="/portafolio" className="link">
              <div>
                <AiOutlineArrowRight className="icon" />
                <p> Portafolio</p>
              </div>
            </Link>
            <Link to="/blog" className="link">
              <div>
                <AiOutlineArrowRight className="icon" />
                <p>Blog</p>
              </div>
            </Link>
            <Link to="contactame" className="link">
              <div>
                <AiOutlineArrowRight className="icon" />
                <p>Contactame</p>
              </div>
            </Link>
          </div>

          <div className="buscador">
            <h4>Buscador</h4>
            <input type="text" placeholder="Ingresa tu búsqueda" />
          </div>
        </div>

        <div className="end__footer">
          Copyright © {new Date().getFullYear()} Henner Rivas - Desarrollador
          web. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
