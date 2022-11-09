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
          <small>Coded by Fan Susantio</small>
        </footer>
      </div>
    </div>
  );
}
