import Bottom from "./Bottom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  layout: string;
  content: string[];
  path: string;
  height_fadeaway: number;
}

const IntroText = ({ layout, content, path, height_fadeaway }: Props) => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const scrollY = (window.scrollY / viewportHeight) * 100;
    const Height_begin_fade = height_fadeaway;

    const newopacity =
      scrollY >= Height_begin_fade
        ? Math.max(1 - (scrollY - Height_begin_fade) / 45, 0)
        : 1;
    setOpacity(newopacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className={layout}
        id="IntroText"
        style={{ cursor: "pointer", opacity: opacity }}
      >
        <div>
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div id="Guide">
          Learn More —<span className="arrow">&gt;</span>
        </div>
      </div>
    </Link>
  );
};

export default IntroText;
