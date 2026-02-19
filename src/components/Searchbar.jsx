import React from "react";

const Searchbar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Sports league..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search"
    />
  );
};

export default Searchbar;
