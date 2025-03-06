"use client";
import React from 'react';
import BackToHomeButton from '../../components/BackToHomeButton'; // Ajusta la ruta según tu estructura

const ProfileSettings = () => {
    return (
        <section className="p-6 bg-gray-900 min-h-screen text-white">
            {/* Título de la página */}
            <h1 className="text-3xl font-bold mb-8">Configuración de Perfil</h1>

            {/* Contenedor principal */}
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Sección de foto de perfil */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Foto de Perfil</h2>
                    <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400">Subir foto</span>
                        </div>
                        <div className="space-x-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Cambiar foto
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                                Eliminar foto
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sección de información básica */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Información Básica</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Nombre</label>
                            <input
                                type="text"
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Correo electrónico"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Número de teléfono</label>
                            <input
                                type="tel"
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Número de teléfono"
                            />
                        </div>
                    </form>
                </div>

                {/* Sección de cambio de contraseña */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Cambio de Contraseña</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Contraseña actual</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Contraseña actual"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Nueva contraseña</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Nueva contraseña"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Confirmar nueva contraseña</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirmar nueva contraseña"
                            />
                        </div>
                    </form>
                </div>

                {/* Sección de preferencias */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Preferencias</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Tema</label>
                            <select
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="light">Claro</option>
                                <option value="dark">Oscuro</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Idioma</label>
                            <select
                                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="es">Español</option>
                                <option value="en">Inglés</option>
                            </select>
                        </div>
                    </form>
                </div>

                {/* Botones de acción */}
                <div className="flex justify-end space-x-4">
                    <BackToHomeButton /> {/* Botón para regresar a la página principal */}
                    <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
                        Cancelar
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Guardar cambios
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfileSettings;