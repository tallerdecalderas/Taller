"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export function SearchBar({
  onSearch,
  placeholder = "Buscar por nombre, CODE, categoría...",
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="relative">
      <div className="flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md focus-within:ring-2 focus-within:ring-blue-500">
        <svg
          className="ml-4 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="px-4 py-3 text-gray-400 transition hover:text-gray-600"
            title="Limpiar búsqueda"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
