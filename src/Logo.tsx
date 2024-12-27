import GOOD_LAND_logo from "./assets/good_land_logo.png";

const Logo = () => {
  return (
    <img
      alt="GOOD LAND logo"
      src={GOOD_LAND_logo}
      className="img"
      style={{ cursor: "pointer" }}
    ></img>
  );
};

export default Logo;
