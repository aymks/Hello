import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import "./global.scss";
import { useState } from "react";
import { useEffect } from "react";
import { Gradient } from "whatamesh";

const gradient = new Gradient();
gradient.initGradient("#gradient-canvas");

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function Checkbox() {
    if (document.getElementById("checkbox").checked === true) {
      //
      setTheme(true);
    } else {
      //
      setTheme(false);
    }
  }
  return (
    <div className="app">
       <canvas id="gradient-canvas" data-transition-in></canvas>
     <div className={"bkg " + (theme && "active")}>
     
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="btn3 ">
          <label className="switch">
            <input
              type="checkbox"
              id="checkbox"
              checked={theme}
              onChange={() => {
                Checkbox();
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="sections" onClick={() => setMenuOpen(false)}>
          <Intro />
          <Portfolio />
          <Skills />

          <div className="cont">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

