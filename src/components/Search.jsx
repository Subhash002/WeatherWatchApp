import React, { useRef, useState } from "react";
import "./SearchComponent.css";

const SearchComponent = ({ onLocationChange }) => {
  const [location, setLocation] = useState("");
  const inputRef = useRef(null);

  const handleSearch = () => {
    const newLocation = inputRef.current.value;
    setLocation(newLocation);
    onLocationChange(newLocation);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for city"
        name="search"
        id="search"
        ref={inputRef}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={handleSearch}
        style={{ background: "transparent", border: "none" }}
        className="search-icon"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchComponent;
