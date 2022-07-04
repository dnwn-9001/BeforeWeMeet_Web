import logo from "./logo.svg";
import "./Common.css";
import Logo from "./Logo";
import Contents from "./Contents";
import Comunity from "./Comunity";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&family=PT+Sans:wght@400;700&family=Quicksand:wght@400;500;600;700&family=Roboto:wght@300;400;700&family=Sunflower:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </header>

      <body>
        <Logo />
        <div className="body__contents">
          <Contents />
          <Comunity />
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
