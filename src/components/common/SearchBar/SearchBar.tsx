import { Loupe } from "@/icons";
import React from "react";

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
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(
    categoryOptions ? categoryOptions[0] : ""
  );

  const handleSearch = () => {
    if (onSearch) onSearch(searchValue, selectedCategory);
  };

  return (
    <div
      className={`flex items-center ${
        type === "primary" ? "p-3 gap-2" : "flex-wrap gap-3 p-3 sm:max-w-[668px] sm:w-screen sm:px-4 sm:py-0 sm:pr-0"
      } bg-glass-gradient rounded-xl border-solid border border-white-10 w-full`}
    >
      {type === "primary" && (
        <button onClick={handleSearch} className="flex-shrink-0">
          <Loupe />
        </button>
      )}
      <input
        type="text"
        className={`flex-1 bg-transparent text-white placeholder-white outline-none ${
          type === "secondary" ? "w-full sm:w-auto" : ""
        }`}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {categoryOptions && type === "secondary" && (
        <select
          className={`bg-transparent text-gray-300 border-l-0 border-t-[1px] border-b-[1px] sm:border-t-0 sm:border-l-[1px] sm:border-b-0 sm:border-l-white-10 outline-none pl-3 py-3 w-full sm:max-w-[230px] sm:w-screen`}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "secondary" && (
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl py-3 px-5 w-full sm:w-auto"
        >
          <Loupe className="hidden sm:block" />
          <span className="block sm:hidden">Bucar</span>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
