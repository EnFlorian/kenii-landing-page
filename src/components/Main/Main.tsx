import "./Main.scss";
import { content } from "../../data/main";

const Main = () => {
  return (
    <main className="main container">
      <div className="main__container">
        <div className="main__content">
          <h1 className="main__title">{content.title}</h1>
          <h1 className="main__subtitle">{content.subtitle}</h1>
          <p className="main__description">{content.description}</p>
          <button className="main-button">
            <a rel="noopener noreferrer" href={content.button.link}>
              {content.button.name}
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
