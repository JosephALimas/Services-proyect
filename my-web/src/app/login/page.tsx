"use client";
import TextInput from "@/components/TextInput_login";
import PrimaryButton from "@/components/PrimaryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* 🧩 Contenedor principal del contenido con padding arriba */}
      <div className="flex-grow pt-40"> {/* 📌 Aquí ajustas el espacio arriba */}
        <div className=" max-w-md mx-auto bg-white rounded-xl  space-y-6">
          {/* 🧩 Título */}
          <h2 className="text-3xl font-semibold text-center text-gray-800">¡Bienvenido!</h2>

          {/* 🧩 Campos de texto */}
          <div className="space-y-4">
            <TextInput
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* 🧩 Botón + Link */}
          <div className="flex items-center justify-between">
          <PrimaryButton
            text="Iniciar sesión"
            onClick={async () => {
              try {
                const res = await fetch('http://localhost:3001/api/auth/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: username, password }),
                });

                const data = await res.json();

                if (res.ok) {
                  console.log('✅ Login exitoso:', data);
                  // Redirige, guarda el usuario o token, etc.
                  alert(`Bienvenido, ${data.user.name}`);
                } else {
                  alert(data.error);
                }
              } catch (err) {
                console.error('❌ Error al iniciar sesión:', err);
                alert('Error en el servidor');
              }
            }}
          />
            <Link href="#" className="text-sky-400 hover:underline text-sm">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;
