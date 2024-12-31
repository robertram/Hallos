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
      className={`flex items-center bg-glass-gradient rounded-xl ${
        type === "primary"
          ? "p-3 gap-2"
          : "px-0 pl-8 pr-0 max-w-[668px] w-screen"
      } border-solid border border-white-10`}
    >
      {type === "primary" && (
        <button onClick={handleSearch}>
          <Loupe />
        </button>
      )}
      <input
        type="text"
        className="flex-1 bg-transparent text-white placeholder-white outline-none"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {categoryOptions && type === 'secondary' && (
        <select
          className="bg-transparent text-gray-300 border-l-[1px] border-l-white-10 outline-none mr-3 pl-3 py-[14px] max-w-[200px] w-screen"
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
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-4"
        >
          <Loupe />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
