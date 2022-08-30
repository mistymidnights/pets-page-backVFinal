import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <p>@Elias Bello y Cristina López - NEOLAND - 2022</p>
        <Link className="link" to="/about">
          About us
        </Link>
      </footer>
    </>
  );
};

export default Footer;
