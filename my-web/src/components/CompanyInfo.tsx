"use client";

import { useState } from "react";

const sections = [
    { title: "Quiénes somos", content: "Información sobre la empresa..." },
    { title: "Misión", content: "Nuestra misión es..." },
    { title: "Visión", content: "Nuestra visión es..." },
    { title: "Valores", content: "Nuestros valores son..." },
];

const CompanyInfo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-10 px-4 w-full h-full text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Información de la Empresa
            </h2>
            <div className="flex flex-col gap-4 w-full h-full items-stretch  mx-auto">
                {sections.map((section, index) => (
                    <div key={index} className="w-full">
                        <button
                            className="w-full h-20 flex items-center justify-center text-white text-xl sm:text-2xl font-bold p-4 bg-gray-800 shadow-lg rounded-lg hover:bg-gray-700 transition duration-300"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {section.title}
                        </button>
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