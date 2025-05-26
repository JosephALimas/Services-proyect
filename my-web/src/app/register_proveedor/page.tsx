"use client";
import TextInput from "@/components/TextInput_login";
import PrimaryButton from "@/components/PrimaryButton";
import Navbar from "@/components/Navbar_secundaria";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from "next/navigation"

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* 🧩 Contenedor principal del contenido con padding arriba */}
      <div className="flex-grow pt-40"> {/* 📌 Aquí ajustas el espacio arriba */}
        <div className=" max-w-md mx-auto bg-white rounded-xl  space-y-6">
          {/* LLENAR AQUI*/}
          {/* 🧩 Título */}
<h2 className="text-3xl font-semibold text-center text-gray-800">Registrarse</h2>

{/* 🧩 Switch entre Usuario y Proveedor */}
<div className="flex justify-center space-x-2">
  <button onClick= {() => router.push("register_user")}   className="px-4 py-2 bg-white text-gray-800 border rounded-tr-lg rounded-br-lg shadow-md hover:bg-gray-100 transition">
    Usuario
  </button>
  <button className="px-4 py-2 bg-sky-500 text-white rounded-tl-lg rounded-bl-lg shadow-md hover:bg-sky-600 transition">
    Proveedor
  </button>
</div>

{/* 🧩 Campos de texto */}
<div className="space-y-4 px-6 pt-6">
  <TextInput placeholder="Nombre" />
  <TextInput placeholder="Correo electrónico" />
  <TextInput placeholder="Contraseña" />
  <TextInput placeholder="Confirma tu contraseña" />
</div>

{/* 🧩 Botón de Registrarse */}
<div className="flex justify-center pt-6 pb-2">
  <PrimaryButton text="Registrarse" />
</div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;
