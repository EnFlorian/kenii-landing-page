import { logo, links, button } from "../../data/navbar";
import { useUiStore } from "../../state/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./Navbar.scss";

const Navbar = () => {
  const { openMobileMenu, isMobileMenuOpen, closeMobileMenu } = useUiStore(
    (state) => state
  );

  const renderedDesktopLinks = links.map((link, index) => (
    <li className="navbar__link" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={link.link}>
        {link.name}
      </a>
    </li>
  ));

  const renderedMobileLinks = links.map((link, index) => (
    <li className="navbar__mobile-link" key={index}>
      <a target="_blank" rel="noopener noreferrer" href={link.link}>
        {link.name}
      </a>
    </li>
  ));

  return (
    <section className="navbar">
      <div className="navbar__wrapper container">
        <div className="navbar__logo-wrapper">
          <a className="navbar__logo-text" href={logo.link}>
            {logo.name}
          </a>
        </div>
        <ul className="navbar__links">
          {renderedDesktopLinks}
          <li>
            <button className="navbar__button">
              <span className="navbar__button-text">{button.name}</span>
            </button>
          </li>
        </ul>
        <div className="navbar__mobile-open-button" onClick={openMobileMenu}>
          <li className="navbar__icon">
            <GiHamburgerMenu />
          </li>
        </div>
        <div
          className={
            isMobileMenuOpen
              ? "navbar__mobile-menu"
              : "navbar__mobile-menu hidden"
          }
        >
          <ul>{renderedMobileLinks}</ul>
          <button className="navbar__mobile-button">
            <span className="navbar__mobile-button-text">{button.name}</span>
          </button>
          {/* close button */}
          <div
            className="navbar__mobile-close-button"
            onClick={closeMobileMenu}
          >
            <li className="navbar__icon">
              <IoCloseSharp />
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
