const brand_name = [
  "G",
  "O",
  "O",
  "D",
  " ",
  "L",
  "A",
  "N",
  "D",
  " ",
  "H",
  "O",
  "M",
  "E",
  " ",
  "A",
  "N",
  "D",
  " ",
  "E",
  "S",
  "S",
  "E",
  "N",
  "T",
  "I",
  "A",
  "L",
  "S",
];

const BrandName = () => {
  return (
    <div className="BrandName">
      {brand_name.map((item, index) =>
        // Check if item is a space and render an empty line
        item === " " ? (
          <div key={index} style={{ height: "12px" }}></div> // Adjust height as needed
        ) : (
          <div className="Letters" key={index}>
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default BrandName;
