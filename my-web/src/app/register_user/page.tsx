"use client";
import TextInput from "@/components/TextInput_login";
import PrimaryButton from "@/components/PrimaryButton";
import Navbar from "@/components/Navbar_secundaria";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  // Estados para los campos
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");

    if (!name || !email || !password || !confirm) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          role: "user"
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Usuario creado exitosamente");
        router.push("/login"); // Redirige al login
      } else {
        setError(data.error || "Error al crear usuario.");
      }
    } catch (err) {
      console.error(err);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-grow pt-40">
        <div className="max-w-md mx-auto bg-white rounded-xl space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Registrarse</h2>

          <div className="flex justify-center space-x-2">
            <button className="px-4 py-2 bg-sky-500 text-white rounded-tl-lg rounded-bl-lg shadow-md hover:bg-sky-600 transition">
              Usuario
            </button>
            <button
              onClick={() => router.push("register_proveedor")}
              className="px-4 py-2 bg-white text-gray-800 border rounded-tr-lg rounded-br-lg shadow-md hover:bg-gray-100 transition"
            >
              Proveedor
            </button>
          </div>

          {/* 🧩 Campos de texto */}
          <div className="space-y-4 px-6 pt-6">
            <TextInput placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <TextInput placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextInput placeholder="Confirma tu contraseña" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          </div>

          {/* 🧩 Botón de Registrarse */}
          <div className="flex justify-center pt-6 pb-2">
            <PrimaryButton text="Registrarse" onClick={handleRegister} />
          </div>

          {error && <p className="text-center text-red-600 text-sm pb-4">{error}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterForm;
