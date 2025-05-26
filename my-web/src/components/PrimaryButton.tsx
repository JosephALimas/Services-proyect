// components/PrimaryButton.tsx
import React from "react";
// boton para iniciar sesion inicialmente
interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; // Opcional, para agregar estilos desde fuera
}

const PrimaryButton = ({ text, onClick, className = "" }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-sky-500 hover:bg-sky-600 text-white text-xl font-normal px-6 py-3 rounded-xl shadow-md transition ${className}`}
    >
      {/* 📌 Texto dinámico */}
      {text}
    </button>
  );
};

export default PrimaryButton;
