import IntroText from "./Intro_text";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import React from "react";
import "./Home.css";
import Top from "./Top";

const Home = () => {
  return (
    <div>
      <Top />
      <Navbar />
      <Logo />
      <IntroText
        layout="intro_layout1"
        content={["GOOD LAND", "HOME AND ESSENTIALS LTD"]}
      />
      <IntroText
        layout="intro_layout2"
        content={["LONG-TERM", "HIGH QUALITY RENTAL"]}
      />
      <IntroText
        layout="intro_layout3"
        content={["SHORT-TERM", "ECONOMICAL RENTAL"]}
      />
      <IntroText
        layout="intro_layout4"
        content={["UPCOMING", "FANCINATING PROJECT"]}
      />
      <Bottom />
    </div>
  );
};

export default Home;
