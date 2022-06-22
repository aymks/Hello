import "./skills.scss";
import React from "react";
import Slider from "infinite-react-carousel";

export default function works() {
  let settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplayScroll: 3,
    autoplaySpeed: 2000,
    centerPadding: 0,
    duration: 300,
    pauseOnHover: false,

    gutter: 50,
  };

  if (window.innerWidth > 850) {
    settings.slidesToShow = 6;
  } else if (window.innerWidth < 850) {
    settings.slidesToShow = 5;
  }

  return (
    <div className="works" id="works">
      <div className="txt">Skills</div>

      <div>
        <Slider className="slider" {...settings}>
          <div className="ic">
            <img src={require("./html.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./css.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./js.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./git.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./jquery.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./react.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./sass.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./php.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./unity.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./c++.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./csh.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./python.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./ps.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./ai.png")} alt="" />
          </div>
          <div className="ic">
            <img src={require("./lr.png")} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
