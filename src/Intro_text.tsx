interface Props {
  layout: string;
  content: string[];
}

const IntroText = ({ layout, content }: Props) => {
  return (
    <div className={layout} id="IntroText">
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default IntroText;
