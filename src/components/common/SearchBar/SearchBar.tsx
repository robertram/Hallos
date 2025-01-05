"use client"
import { Loupe } from "@/icons";
import React, { useState } from "react";

type SearchBarProps = {
  type: "primary" | "secondary";
  placeholder?: string;
  categoryOptions?: string[];
  onSearch?: (value: string, category?: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  type = "primary",
  placeholder = "Search for an event",
  categoryOptions,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryOptions ? categoryOptions[0] : ""
  );

  const handleSearch = () => {
    if (onSearch) onSearch(searchValue, selectedCategory);
  };

  return (
    <div
      className={`flex items-center ${type === "primary" ? "p-3 gap-2" : "flex-wrap gap-3 p-3 sm:max-w-[668px] sm:w-screen sm:px-4 sm:py-0 sm:pr-0"
        } bg-glass-gradient rounded-xl border-solid border border-white-10 w-full`}
    >
      {/* <Loupe /> */}
      {type === "primary" && (
        <button onClick={handleSearch} className="flex-shrink-0">
          <Loupe className="w-6 h-6 hover:fill-red-700 opacity-50" />
        </button>
      )}
      <input
        type="text"
        style={{ opacity: 1 }}
        className={`flex-1 bg-transparent text-white outline-none !text-text1 ${type === "secondary" ? "w-full sm:w-auto pl-[15px]" : ""
          }`}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={(e) => e.target.style.setProperty('--placeholder-opacity', '0.5')}
        onBlur={(e) => e.target.style.setProperty('--placeholder-opacity', '1')}
      />
      {categoryOptions && type === "secondary" && (
        <select
          className={`bg-transparent text-gray-300 border-l-0 border-t-[1px] border-b-[1px] sm:border-t-0 sm:border-l-[1px] sm:border-b-0 sm:border-l-white-10 outline-none pl-3 py-3 w-full sm:max-w-[230px] sm:w-screen`}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option} className="text-text1">
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "secondary" && (
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl w-[58px] h-[58px] "
        >
          <Loupe className="hidden sm:block mx-auto" />
          <span className="block sm:hidden">Buscar</span>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
