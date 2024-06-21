import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="contact-container">
                    <p>contact me here !</p>
                    <div className="contact-icons">
                        <a href="mailto:char.ordo1@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/charlynne-ordonez/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
                        </a>
                        <a href="https://github.com/chadri0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
