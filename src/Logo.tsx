import GOOD_LAND_logo from "./assets/good_land_logo.png";

const Logo = () => {
  return (
    <img
      alt="GOOD LAND logo"
      src={GOOD_LAND_logo}
      style={{ width: "9vw", height: "auto", position: "fixed" }}
    ></img>
  );
};

export default Logo;
