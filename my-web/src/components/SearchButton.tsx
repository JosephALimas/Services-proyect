"use client";
import React from 'react';

const SearchBar = () => {
    const handleSearch = () => {
        // Aquí puedes agregar la lógica para manejar la búsqueda
        console.log("Buscar...");
    };

    return (
        <div className="w-full bg-gray-800 flex items-center p-4 rounded-lg shadow-lg">
            {/* Input de búsqueda */}
            <input
                className="w-full p-3 text-white placeholder-gray-400 bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                type="text"
                placeholder="¿Qué servicio buscas?"
            />

            {/* Botón de búsqueda (sin ícono) */}
            <button
                onClick={handleSearch}
                className="ml-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Buscar
            </button>
        </div>
    );
};

export default SearchBar;