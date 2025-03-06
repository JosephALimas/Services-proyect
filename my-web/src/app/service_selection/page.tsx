"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; // Import useRouter

const ServiceRequest = () => {
    // Use useSearchParams to get the query parameters
    const searchParams = useSearchParams();
    const serviceName = searchParams.get("service"); // Extract the service name from the query
    const router = useRouter(); // Initialize the router

    // Estados para manejar los datos del formulario
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [colony, setColony] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [details, setDetails] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("efectivo");

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar la solicitud
        console.log("Solicitud enviada:", {
            serviceName, // Include the service name in the submitted data
            street,
            number,
            colony,
            postalCode,
            city,
            state,
            details,
            paymentMethod,
        });
        alert("Solicitud enviada con éxito");

        // Redirige a la vista de proveedores de servicios
        router.push("/directorio");
    };

    return (
        <section className="py-10 px-4 bg-gray-900 min-h-screen text-white">
            <div className="max-w-3xl mx-auto">
                {/* Título de la página */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Solicitar Servicio: {serviceName}
                </h2>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dirección */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Dirección</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Calle"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Número"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Colonia"
                                value={colony}
                                onChange={(e) => setColony(e.target.value)}
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Código Postal"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Ciudad"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Estado"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Detalles adicionales */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Detalles adicionales</h3>
                        <textarea
                            placeholder="Proporciona detalles adicionales sobre el servicio..."
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                        />
                    </div>

                    {/* Método de pago */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Método de pago</h3>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="efectivo"
                                    checked={paymentMethod === "efectivo"}
                                    onChange={() => setPaymentMethod("efectivo")}
                                    className="form-radio text-blue-500"
                                />
                                <span>Efectivo</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="tarjeta"
                                    checked={paymentMethod === "tarjeta"}
                                    onChange={() => setPaymentMethod("tarjeta")}
                                    className="form-radio text-blue-500"
                                />
                                <span>Tarjeta</span>
                            </label>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end space-x-4">
                        <Link href="/">
                            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
                                Regresar al menú principal
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Enviar solicitud
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ServiceRequest;