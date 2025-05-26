import React from "react";

interface ImageButtonProps {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ imageSrc, alt = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-28 h-28 rounded-xl bg-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex items-center justify-center transition hover:scale-105"
    >
      <img src={imageSrc} alt={alt} className="max-w-full max-h-full object-contain" />
    </button>
  );
};

export default ImageButton;
