import React, { useState } from "react";

interface Props {
  onSearch: (text: string, searchBy: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchTxt, setSearchTxt] = React.useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [placeholder, setPlaceholder] = useState("Eg. The Accursed God");
  const [inputFieldValue, setInputFieldValue] = useState("")

  const handleValueChange = (e: any) => {
    setSearchBy(e.target.value);
    setInputFieldValue("")
    if (e.target.value === "title") {
      setPlaceholder("Eg. The Accursed God");
    } else if (e.target.value === "author") {
      setPlaceholder("Eg. Vivek Dutta Mishra");
    } else if (e.target.value === "rating") {
      setPlaceholder("Min. Rating");
    } else if (e.target.value === "price") {
      setPlaceholder("Min price - Max Price");
    }
  };
  return (
    <div className="search-field">
      <select
        name="searchBy"
        onChange={(e) => {
          handleValueChange(e);
        }}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="rating">Rating</option>
        <option value="price">Price</option>
      </select>
      <input
        type="text"
        id="search"
        name="search"
        placeholder={placeholder}
        value={inputFieldValue}
        onChange={(e) => {
          setInputFieldValue(e.target.value)
          setSearchTxt(e.target.value);
        }}
      ></input>
      <button onClick={() => onSearch(searchTxt, searchBy)}>Search</button>
    </div>
  );
};

export default Search;
