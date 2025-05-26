"use client";
import TextInput from "@/components/TextInput_login";
import PrimaryButton from "@/components/PrimaryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
                      {errorMsg && (
              <p className="text-red-600 text-sm text-center">{errorMsg}</p>
            )}


          {/* 🧩 Botón + Link */}
          <div className="flex items-center justify-between">
          <PrimaryButton
            text="Iniciar sesión"
            onClick={async () => {
            setErrorMsg(""); // limpia errores previos

            try {
              const res = await fetch('http://localhost:3001/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: username, password }),
              });

              const data = await res.json();

              if (res.ok) {
                console.log('✅ Login exitoso:', data);
                router.push("/main_page");
              } else {
                setErrorMsg("Contraseña o correo incorrecto"); // 👈 muestra el mensaje
              }
            } catch (err) {
              console.error('❌ Error al iniciar sesión:', err);
              setErrorMsg("Error en el servidor");
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
