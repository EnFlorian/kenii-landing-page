import React from "react";
import "./Footer.scss";
import { copyRight, socials } from "../../data/footer";

const Footer = () => {
  const renderedSocials = socials.map((social, index) => (
    <li className="footer__social" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={social.link}>
        {social.icon}
      </a>
    </li>
  ));

  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; {copyRight.year} - {copyRight.name}
        </p>
        <ul className="footer__socials">{renderedSocials}</ul>
      </div>
    </section>
  );
};

export default Footer;
