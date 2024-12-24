import { useState } from "react";
import IntroText from "./Intro_text";
import Logo from "./Logo";
import "./App.css";

function App() {
  return (
    <div>
      <Logo></Logo>
      <IntroText layout="intro_layout1" />
    </div>
  );
}

export default App;
