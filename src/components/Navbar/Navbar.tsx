import React from "react";
import { logo, links } from "../../data/navbar";

const Navbar = () => {
  const renderedLinks = links.map((link, index) => (
    <li className="navbar__link" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={link.link}>
        {link.name}
      </a>
    </li>
  ));

  return (
    <section className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href={logo.link}>{logo.name}</a>
        </div>
        <ul className="navbar__links">{renderedLinks}</ul>
      </div>
    </section>
  );
};

export default Navbar;
