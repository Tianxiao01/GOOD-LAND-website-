import IntroText from "./Intro_text";
import Logo from "./Logo";
import Bottom from "./Bottom";
import React from "react";
import "./Home.css";
import Top from "./Top";

const subpages = [
  { name: "Long-Term Rental", path: "/" },
  { name: "Long-Term Rental", path: "/LongTerm" },
  { name: "Short-Term Rental", path: "/ShortTerm" },
  { name: "Upcoming Products", path: "/Future" },
];

const Home = () => {
  return (
    <div>
      <Top />

      <IntroText
        layout="intro_layout1"
        content={["GOOD LAND", "HOME AND ESSENTIALS LTD"]}
        path={subpages[0].path}
      />
      <IntroText
        layout="intro_layout2"
        content={["LONG-TERM", "HIGH QUALITY RENTAL"]}
        path={subpages[1].path}
      />
      <IntroText
        layout="intro_layout3"
        content={["SHORT-TERM", "ECONOMICAL RENTAL"]}
        path={subpages[2].path}
      />
      <IntroText
        layout="intro_layout4"
        content={["UPCOMING", "FANCINATING PROJECT"]}
        path={subpages[3].path}
      />
      <Bottom />
    </div>
  );
};

export default Home;
