import Bottom from "./Bottom";

interface Props {
  layout: string;
  content: string[];
}

const IntroText = ({ layout, content }: Props) => {
  return (
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
  );
};

export default IntroText;
