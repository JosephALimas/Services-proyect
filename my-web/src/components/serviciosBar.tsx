"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    { name: "Limpieza", img: "/img/limpieza-icon.png" },
    { name: "Cerrajero", img: "/img/cerrajeria-icon.png" },
    { name: "Carpintero", img: "/img/carpinteria-icon.png" },
    { name: "Plomero", img: "/img/plomeria-icon.png" },
    // Puedes agregar más servicios aquí
];

const ServiceDisplay = () => {
    return (
        <section className="py-6 w-full flex flex-col">
            {/* Título "Sugerencias" */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 text-left">
                Sugerencias
            </h2>

            {/* Contenedor de los botones con estilos personalizados para la scrollbar */}
            <div className="p-7 flex flex-nowrap items-center justify-center gap-4 overflow-x-auto w-full max-w-screen-xl scrollbar-custom ">
                {services.map((service, index) => (
                    <Link 
                        key={index}
                        href={{
                            pathname: "/service_selection",
                            query: { service: service.name }, // Pasa el nombre del servicio como query parameter
                        }}
                        className="w-28 h-36 sm:w-36 sm:h-44 md:w-44 md:h-52 lg:w-52 lg:h-60 flex-shrink-0 flex flex-col items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold p-4 bg-gray-700 shadow-lg rounded-lg hover:scale-105 transition duration-300"
                    >
                        {/* Contenedor de la imagen */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
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
                    </Link>
                ))}
            </div>

            {/* Estilos personalizados para la scrollbar */}
            <style jsx>{`
                .scrollbar-custom::-webkit-scrollbar {
                    height: 8px; /* Altura de la scrollbar */
                }

                .scrollbar-custom::-webkit-scrollbar-track {
                    background: #374151; /* Color de fondo de la pista (track) */
                    border-radius: 4px; /* Bordes redondeados */
                }

                .scrollbar-custom::-webkit-scrollbar-thumb {
                    background: #6B7280; /* Color del thumb (barra deslizante) */
                    border-radius: 4px; /* Bordes redondeados */
                }

                .scrollbar-custom::-webkit-scrollbar-thumb:hover {
                    background: #9CA3AF; /* Color del thumb al pasar el mouse */
                }
            `}</style>
        </section>
    );
};

export default ServiceDisplay;