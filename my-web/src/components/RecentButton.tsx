import React from "react";
import { FaClock } from "react-icons/fa"; // usa react-icons para el ícono

interface RecentButtonProps {
  text: string;
  onClick?: () => void;
}

const RecentButton: React.FC<RecentButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" w-full flex items-center gap-3 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition text-black"
    >
      <FaClock className="text-lg" />
      <span className="text-base">{text}</span>
    </button>
  );
};

export default RecentButton;