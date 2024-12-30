import Bottom from "./Bottom";
import { Link } from "react-router-dom";

interface Props {
  layout: string;
  content: string[];
  path: string;
}

const IntroText = ({ layout, content, path }: Props) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={layout} id="IntroText" style={{ cursor: "pointer" }}>
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
