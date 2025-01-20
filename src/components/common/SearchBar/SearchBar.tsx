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
      className={`flex items-center ${type === "primary" ? "p-3 gap-2" : "flex-wrap gap-3 p-3 md:max-w-[668px] md:w-screen md:px-4 md:py-0 md:pr-0"
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
        className={`flex-1 bg-transparent text-white outline-none !text-text1 ${type === "secondary" ? "w-full md:w-auto pl-[15px] border-b-[1px] md:border-b-0 pb-4 md:pb-0 " : ""
          }`}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={(e) => e.target.style.setProperty('--placeholder-opacity', '0.5')}
        onBlur={(e) => e.target.style.setProperty('--placeholder-opacity', '1')}
      />
      {categoryOptions && type === "secondary" && (
        <select
          className={`bg-transparent text-gray-300  md:border-t-0 md:border-l-[1px] md:border-b-0 md:border-l-white-10 outline-none pl-3 py-3 w-full md:max-w-[230px] md:w-screen`}
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
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl md:w-[58px] h-[58px] w-full text-button1 font-semibold"
        >
          <Loupe className="hidden md:block mx-auto" />
          <span className="block md:hidden">Buscar</span>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
