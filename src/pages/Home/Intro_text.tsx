import Bottom from "./Bottom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../../assets/tmp_img1.jpg";
import img2 from "../../assets/tmp_img2.jpg";

interface Props {
  layout: string;
  content: string[];
  path: string;
  img: string;
  height_fadeaway: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const IntroText = ({ layout, content, path, height_fadeaway, img }: Props) => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const scrollY = (window.scrollY / viewportHeight) * 100;
    const Height_begin_animation = height_fadeaway;

    const newopacity =
      scrollY >= Height_begin_animation
        ? Math.max(1 - Math.abs(scrollY - (Height_begin_animation+90)) / 90, 0)
        : 0;
    setOpacity(newopacity);
    console.log(scrollY);

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const number_of_layout = Number(layout.charAt(12));
  const {width,height}=useWindowSize();

  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={img === "img1" ? img1 : img === "img2" ? img2 : img1}
          alt="img_1"
          className={
            number_of_layout % 2 === 0 ? "introBackground2" : "introBackground1"
          }
          style={{
            opacity: opacity,
            width: "100vw",
            height: "100vh",
            zIndex: "1",
          }}
        ></img>
      </div>

      <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className={layout}
          id="IntroText"
          style={{ cursor: "pointer", opacity: opacity, zIndex: "3",
            ...(width < height
              ? parseInt(layout.match(/\d+/)?.[0] || "0", 10) % 2 !== 0
                  ? { left: "30vw" }  
                  : { left: "20vw" } 
              : {}),
            fontSize:width<height ? "3.1vh":undefined,
            width:width<height ? "62.5vw":undefined }}
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
    </>
  );
};

export default IntroText;
