import IntroText from "./Intro_text";
import Logo from "./Logo";
import Bottom from "./Bottom";
import React from "react";
import "./Home.css";
import Top from "./Top";

const subpages = [
  { name: "Long-Term Rental", path: "/GOOD-LAND-website-", height_fadeaway: -90 },
  { name: "Long-Term Rental", path: "/LongTerm", height_fadeaway: 10 },
  { name: "Short-Term Rental", path: "/ShortTerm", height_fadeaway: 110 },
  { name: "Upcoming Products", path: "/Future", height_fadeaway: 210 },
];

const Home = () => {
  return (
    <div>
      <Top />

      <IntroText
        layout="intro_layout1"
        content={["GOOD LAND", "HOME AND ESSENTIALS LTD"]}
        path={subpages[0].path}
        img="img1"
        height_fadeaway={subpages[0].height_fadeaway}
      />
      <IntroText
        layout="intro_layout2"
        content={["LONG-TERM", "HIGH QUALITY RENTAL"]}
        path={subpages[1].path}
        img="img2"
        height_fadeaway={subpages[1].height_fadeaway}
      />
      <IntroText
        layout="intro_layout3"
        content={["SHORT-TERM", "ECONOMICAL RENTAL"]}
        path={subpages[2].path}
        img="img1"
        height_fadeaway={subpages[2].height_fadeaway}
      />
      <IntroText
        layout="intro_layout4"
        content={["UPCOMING", "FANCINATING PROJECT"]}
        path={subpages[3].path}
        img="img2"
        height_fadeaway={subpages[3].height_fadeaway}
      />
      <Bottom />
    </div>
  );
};

export default Home;
