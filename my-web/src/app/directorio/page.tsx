"use client";
import React, { useState } from "react";
import Link from "next/link"; // Importa Link para la navegación

// Datos de placeholder para las personas disponibles
const availablePeople = [
    {
        id: 1,
        name: "Juan Pérez",
        service: "Limpieza",
        rating: 4.5,
        waitTime: "30 mins",
        contact: "juan.perez@example.com",
        availability: "Disponible ahora",
        cost: "$200",
        photo: "/img/person1.jpg", // Ruta de la foto (puedes usar una imagen placeholder)
    },
    {
        id: 2,
        name: "María Gómez",
        service: "Cerrajería",
        rating: 4.8,
        waitTime: "45 mins",
        contact: "maria.gomez@example.com",
        availability: "Disponible en 1 hora",
        cost: "$250",
        photo: "/img/person2.jpg",
    },
    {
        id: 3,
        name: "Carlos López",
        service: "Plomería",
        rating: 4.2,
        waitTime: "1 hora",
        contact: "carlos.lopez@example.com",
        availability: "Disponible mañana",
        cost: "$300",
        photo: "/img/person3.jpg",
    },
];

const ServiceProvidersList = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null); // Estado para controlar qué persona está expandida

    return (
        <section className="py-10 px-4 bg-gray-900 min-h-screen text-white">
            <div className="max-w-3xl mx-auto">
                {/* Botón para regresar al menú principal */}
                <div className="flex justify-start mb-6">
                    <Link href="/">
                        <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
                            Regresar al menú principal
                        </button>
                    </Link>
                </div>

                {/* Título de la página */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Personas Disponibles
                </h2>

                {/* Lista de personas */}
                <div className="space-y-4">
                    {availablePeople.map((person) => (
                        <div key={person.id} className="bg-gray-800 rounded-lg shadow-lg">
                            {/* Botón para expandir/colapsar */}
                            <button
                                className="w-full p-4 flex justify-between items-center text-left"
                                onClick={() => setExpandedId(expandedId === person.id ? null : person.id)}
                            >
                                <div className="flex items-center space-x-4">
                                    {/* Foto de la persona */}
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img
                                            src={person.photo}
                                            alt={person.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Información básica */}
                                    <div>
                                        <h3 className="text-xl font-semibold">{person.name}</h3>
                                        <p className="text-gray-400">{person.service}</p>
                                    </div>
                                </div>
                                {/* Calificación y tiempo de espera */}
                                <div className="text-right">
                                    <p className="text-yellow-400">
                                        {person.rating} ⭐
                                    </p>
                                    <p className="text-gray-400">{person.waitTime}</p>
                                </div>
                            </button>

                            {/* Información expandida */}
                            {expandedId === person.id && (
                                <div className="p-4 border-t border-gray-700">
                                    <div className="space-y-3">
                                        <p><strong>Contacto:</strong> {person.contact}</p>
                                        <p><strong>Disponibilidad:</strong> {person.availability}</p>
                                        <p><strong>Costo:</strong> {person.cost}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProvidersList;