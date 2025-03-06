"use client";

import { useState } from "react";
import Link from "next/link";

const sections = [
    { title: "Quiénes somos", content: "Información sobre la empresa..." },
    { title: "Misión", content: "Nuestra misión es..." },
    { title: "Visión", content: "Nuestra visión es..." },
    { title: "Valores", content: "Nuestros valores son..." },
];

const CompanyInfo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen bg-gray-900 py-10 px-4 w-full text-center">
            {/* Botón para regresar al menú principal */}
            <div className="w-full flex justify-start mb-8">
                <Link
                    href="/" // Cambia "/" por la ruta de tu menú principal
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Regresar
                </Link>
            </div>

            {/* Título de la vista */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Información de la Empresa
            </h2>

            {/* Contenedor de las secciones */}
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
                {sections.map((section, index) => (
                    <div key={index} className="w-full">
                        {/* Botón para expandir/colapsar la sección */}
                        <button
                            className="w-full h-20 flex items-center justify-center text-white text-xl sm:text-2xl font-bold p-4 bg-gray-800 shadow-lg rounded-lg hover:bg-gray-700 transition duration-300"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {section.title}
                        </button>

                        {/* Contenido de la sección (se muestra si está abierta) */}
                        {openIndex === index && (
                            <p className="mt-2 px-6 py-4 bg-gray-700 text-gray-300 rounded-lg shadow-md">
                                {section.content}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyInfo;