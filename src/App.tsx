import { useState } from "react";
import IntroText from "./Intro_text";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import "./App.css";

function App() {
  return (
    <div>
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
      <Bottom />
    </div>
  );
}

export default App;
