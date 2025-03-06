"use client";
import React from 'react';
import Image from 'next/image';

// aquí tiene que llegar la información sobre los recientes, se tiene que agregar el estilo de los botones, además de la redirección al servicio reciente
const services = [
    { name: "Limpieza", img: "/img/limpieza-icon.png" },
    { name: "Cerrajero", img: "/img/cerrajeria-icon.png" },
    { name: "Carpintero", img: "/img/carpinteria-icon.png" },
    { name: "Plomero", img: "/img/plomeria-icon.png" },
    // Puedes agregar más servicios aquí
];

const recientesBar = () => {
    return (
        <section className="py-6 w-full flex flex-col">
            {/* Título "Sugerencias" */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 text-left">
                Sugerencias
            </h2>

            {/* Contenedor de los botones */}
            <div className="flex flex-nowrap gap-4 overflow-x-auto w-full max-w-screen-xl scrollbar-hide">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 flex-shrink-0 flex flex-col items-center justify-center text-gray-900 text-lg md:text-xl lg:text-2xl font-bold shadow-soft-glow p-4 bg-white shadow-2xl rounded-lg hover:scale-105 transition duration-300"
                    >
                        {/* Contenedor de la imagen */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                            <Image 
                                src={service.img} 
                                alt={service.name}
                                width={128} // Ajusta el ancho de la imagen
                                height={128} // Ajusta el alto de la imagen
                                className="rounded-lg"
                            />
                        </div>
                        {/* Texto debajo de la imagen */}
                        <span className="mt-2 text-center">{service.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default recientesBar;