import Logo from "./pages/Home/Logo";
import { Link } from "react-router-dom";

const subpages = [
  { name: "Long-Term Rental", path: "/LongTerm" },
  { name: "Short-Term Rental", path: "/ShortTerm" },
  { name: "Upcoming Products", path: "/Future" },
];

const Navbar = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo />
      </Link>
      <ul className="NavBar">
        {subpages.map((subpage, index) => (
          <li key={index} className="subpage" style={{ cursor: "pointer" }}>
            <Link to={subpage.path} style={{ textDecoration: "none", color: "inherit" }}>
              {subpage.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
