import React from "react";
import "./About.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="About-container">
        <div className="aboutCard">
          <div className="profile-photo">
            <img
              src="https://avatars.githubusercontent.com/u/108528855?v=4"
              alt="Elias"
            />
          </div>
          <h1>Elias Bello</h1>
          <h2>Developer</h2>
          <div className="rrssAbout">
            <a href="https://github.com/eabelloc" target="_blank">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/eabellocdev/" target="_blank">
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="aboutCard">
          <div className="profile-photo">
            <img
              src="https://media.discordapp.net/attachments/701164137081733201/1009048743758286858/DSC6713_copia.jpg?width=664&height=664"
              alt="Chris"
            />
          </div>
          <h1>Christine Lopez</h1>
          <h2>Developer</h2>
          <div className="rrssAbout">
            <a href="https://github.com/mistymidnights" target="_blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/cristina-l-165a9218a/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
