import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/itemsSlice";
import useDebouncedSearch from "../hooks/useDebouncedSearch";
import "../App.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const debouncedSearch = useDebouncedSearch((query) => {
    dispatch(setSearchTerm(query));
  }, 1000); // 10000ms debounce

  const handleSearchChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchInput(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  return (
    <div>
      <input
        className="search_Bar"
        type="text"
        placeholder="Search by item"
        value={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default React.memo(SearchBar);
