import "./Main.scss";
import { content } from "../../data/main";

const Main = () => {
  return (
    <main className="main container">
      <div className="main__wrapper">
        <div className="main__content">
          <h1 className="main__title">{content.title}</h1>
          <h1 className="main__subtitle">
            & <span className="main__accent">{content.subtitle}</span>
          </h1>
          <p className="main__description">
            <span className="main__tag-line">{content.tagline}</span> {""}
            {content.description}
          </p>
          <button className="main__button">
            <a rel="noopener noreferrer" href={content.button.link}>
              {content.button.name}
            </a>
          </button>
        </div>
        <div className="main__image-wrapper">
          <img src={content.image} alt="main" />
        </div>
      </div>
    </main>
  );
};

export default Main;
