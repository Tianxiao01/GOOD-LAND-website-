interface Props {
  layout: string;
}

const IntroText = ({ layout }: Props) => {
  return (
    <div className={layout}>
      <div>GOOD LAND</div>
      <div>HOME AND ESSENTIALS LTD</div>
    </div>
  );
};

export default IntroText;
