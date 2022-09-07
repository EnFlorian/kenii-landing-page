import { logo, links } from "../../data/navbar";
import { useUiStore } from "../../state/store";
import "./Navbar.scss";

const Navbar = () => {
  const { openMobileMenu } = useUiStore((state) => state);

  const renderedLinks = links.map((link, index) => (
    <li className="navbar__link" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={link.link}>
        {link.name}
      </a>
    </li>
  ));

  return (
    <section className="navbar container">
      <div className="navbar__logo-wrapper">
        <a className="navbar__logo-text" href={logo.link}>
          {logo.name}
        </a>
      </div>
      <ul className="navbar__links">
        {renderedLinks}
        <li>
          <button className="navbar__button">
            <span className="navbar__button-text">Get in touch</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
