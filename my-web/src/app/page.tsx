"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
    const [isProvider, setIsProvider] = useState(false); // Estado para alternar entre usuario y proveedor

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            {/* Contenedor principal con bordes redondeados */}
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
                {/* Título */}
                <h1 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                </h1>

                {/* Botones para alternar entre login y registro */}
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                      onClick={() => setIsLogin(true)}
                      className={`px-4 py-2 rounded-lg transition ${
                          isLogin ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                  >
                      <Link href="/main">Iniciar Sesión</Link>
                  </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`px-4 py-2 rounded-lg transition ${
                            !isLogin ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                    >
                        Registrarse
                    </button>
                </div>

                {/* Formulario de login o registro */}
                {isLogin ? (
                    <LoginForm />
                ) : (
                    <RegisterForm isProvider={isProvider} setIsProvider={setIsProvider} />
                )}
            </div>
        </section>
    );
};

// Componente para el formulario de login
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [isProvider, setIsProvider] = useState(false); // Estado para alternar entre usuario y proveedor

    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Usuario</label>
                <input
                    type="text"
                    className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Usuario"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                    type="password"
                    className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contraseña"
                />
            </div>
            <div className="flex justify-between items-center">
                <button
                    type="button"
                    className="text-blue-500 hover:text-blue-400 transition text-sm"
                >
                    ¿Olvidaste tu contraseña?
                </button>
                <button
                    onClick={() => setIsLogin(true)}
                    className={`px-4 py-2 rounded-lg transition ${
                        isLogin ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                >
                    <Link href="/main">Iniciar Sesión</Link>
                </button>
            </div>
        </form>
    );
};

// Componente para el formulario de registro
const RegisterForm = ({ isProvider, setIsProvider }: { isProvider: boolean; setIsProvider: (value: boolean) => void }) => {
    return (
        <form className="space-y-4">
            {/* Selección de tipo de cuenta (usuario o proveedor) */}
            <div>
                <label className="block text-sm font-medium mb-1">Tipo de Cuenta</label>
                <div className="flex space-x-4">
                    <button
                        type="button"
                        onClick={() => setIsProvider(false)}
                        className={`px-4 py-2 rounded-lg transition ${
                            !isProvider ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                    >
                        Usuario
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsProvider(true)}
                        className={`px-4 py-2 rounded-lg transition ${
                            isProvider ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                    >
                        Proveedor
                    </button>
                </div>
            </div>

            {/* Campos comunes para usuario y proveedor */}
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
                <label className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                    type="password"
                    className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contraseña"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Confirmar Contraseña</label>
                <input
                    type="password"
                    className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirmar Contraseña"
                />
            </div>

            {/* Campo adicional para proveedores */}
            {isProvider && (
                <div>
                    <label className="block text-sm font-medium mb-1">Servicio que Ofreces</label>
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Servicio que Ofreces"
                    />
                </div>
            )}

            {/* Botón de registro */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Registrarse
            </button>
        </form>
    );
};

export default LoginPage;