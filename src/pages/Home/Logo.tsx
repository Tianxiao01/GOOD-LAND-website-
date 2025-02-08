import GOOD_LAND_logo from "../../assets/good_land_logo.png";

interface Props{
  size:string
  top:string
}



const Logo = ({size,top}:Props) => {
  return (
    <img
      alt="GOOD LAND logo"
      src={GOOD_LAND_logo}
      className="img"
      style={{ cursor: "pointer",width: `${size}`,top: `${top}` }}
    ></img>
  );
};

export default Logo;
