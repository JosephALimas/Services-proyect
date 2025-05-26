// components/TextInput.tsx
import React from "react";

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // opcional, para aplicar estilos adicionales desde fuera
}

const TextInput = ({ placeholder, value, onChange, className = "" }: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded-xl bg-white shadow-xl placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${className}`}
    />
  );
};

export default TextInput;
