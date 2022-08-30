import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import "./Header.css";

const Header = ({ switchTheme }) => {
  const { pet, logout } = useContext(JwtContext);
  let navigate = useNavigate();

  return (
    <>
      <header>
        <nav>
          <div className="logo-home">
            <Link className="link" to="/">
              <img className="logo-container" src="\cat-copia.png" alt="logo" />
            </Link>
          </div>

          <ul className="navMenu">
            {pet ? (
              <>
                <li className="Welcome">Welcome {pet.petName}!</li>
                <li>
                  <Link to="/pets">Pets</Link>
                </li>
                <li className="li_avatar">
                  <Link className="profileNav" to="/profile">
                    Profile
                  </Link>
                  <div className="avatar_container">
                    {pet.avatar != "undefined" ? (
                      <img src={pet?.avatar} alt="Pet Avatar" />
                    ) : null}
                  </div>
                </li>
                <li>
                  <button
                    className="btn-logout"
                    onClick={() => {
                      logout(), navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
          <input
            className="switchInput"
            type="checkbox"
            id="toggle_checkbox"
          ></input>
          <label
            className="switchLabel"
            for="toggle_checkbox"
            onClick={switchTheme}
          ></label>
        </nav>
      </header>
    </>
  );
};

export default Header;
