import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Búsqueda"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-6 py-3 pr-12 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
      />

      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
