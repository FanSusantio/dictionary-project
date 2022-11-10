import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="popcorn" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/fan-susantio-62227919/"
              target="_blank"
              rel="noreferrer"
            >
              Fan Susantio
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/FanSusantio/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
