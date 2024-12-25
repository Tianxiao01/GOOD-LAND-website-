import { useState } from "react";
import IntroText from "./Intro_text";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Logo />
      <IntroText
        layout="intro_layout1"
        content={["GOOD LAND", "HOME AND ESSENTiALS LTD"]}
      />
    </div>
  );
}

export default App;
