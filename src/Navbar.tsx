const subpages: string[] = [
  "Long-Term Rental",
  "Short-term Rental",
  "Upcoming products",
];

const Navbar = () => {
  return (
    <ul className="NavBar">
      {subpages.map((subpage, index) => (
        <li key={index} className="subpage">
          {subpage}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
