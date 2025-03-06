"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const DrawerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

    // Función para alternar el estado del menú
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Botón para alternar el menú */}
            <button
                onClick={toggleDrawer}
                className="p-6 text-xl font-bold rounded-lg transition duration-300 transform hover:scale-110 hover:bg-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl"
            >
                ☰
            </button>

            {/* Menú desplegable que se expande horizontalmente en la parte superior */}
            <div
                className={`fixed top-0 left-0 right-0 bg-gray-800 shadow-lg transition-transform transform ${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                }`}
                style={{ height: '12%' }}
            >
                <ul className="flex flex-row justify-evenly items-center p-4" style={{ height: '100%' }}>
                    <li>
                        <button
                            onClick={toggleDrawer}
                            className="p-6 text-xl font-bold rounded-lg transition duration-300 transform hover:scale-125 hover:bg-gray-700 bg-gray-800 text-white shadow-lg hover:shadow-xl"
                        >
                            ☰
                        </button>
                    </li>
                    {/* Enlaces del menú */}
                    <li>
                        <Link 
                            href="/profile" 
                            className="hover:bg-gray-700 rounded p-2 text-white text-lg md:text-xl transition duration-300"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/company_info" 
                            className="hover:bg-gray-700 rounded p-2 text-white text-lg md:text-xl transition duration-300"
                        >
                            Más información
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DrawerNavbar;