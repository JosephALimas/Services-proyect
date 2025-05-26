// components/ActionButton.tsx
import { ArrowRight } from "lucide-react";
import React from "react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const ActionButton = ({ text, onClick, className = "" }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-full max-w-sm px-6 py-4 border-b border-gray-300 text-gray-800 text-4xl hover:text-black transition ${className}`}
    >
      {/* 📌 Texto sin negrita, pero con tamaño grande */}
      <span>{text}</span>

      {/* 📌 Ícono más grande para acompañar el texto */}
      <ArrowRight className="w-8 h-8" />
    </button>
  );
};

export default ActionButton;
