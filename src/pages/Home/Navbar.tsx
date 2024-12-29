const subpages: string[] = [
  "Long-Term Rental",
  "Short-term Rental",
  "Upcoming products",
];

const Navbar = () => {
  return (
    <ul className="NavBar">
      {subpages.map((subpage, index) => (
        <li key={index} className="subpage" style={{ cursor: "pointer" }}>
          {subpage}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
