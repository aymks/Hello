import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function intro({ menuOpen, setMenuOpen }) {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer btext">&lt;/&gt;</div>
      </div>
      <div className="right">
        <div className="btext big">Hi, I'm Aymen</div>
        <div className="btext tex">
          I'm a front-end developer with a background in graphic design, and I
          love to explore new features and implement functionality. 
        </div>
      </div>

      <KeyboardArrowDown className="arr" />
    </div>
  );
}
