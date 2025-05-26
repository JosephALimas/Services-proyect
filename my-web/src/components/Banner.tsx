// components/Banner.tsx
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Texto principal */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2
            className="text-5xl font-bold text-gray-800"
          >
            {/* 📌 Puedes cambiar el tamaño con `text-4xl`, `text-6xl`, etc. */}
            Consigue ayuda de todo tipo, <br />rápido y de confianza.
          </h2>
        </div>

        {/* Imagen de personas trabajando */}
        <div className="flex-shrink-0 ml-5">
          <Image
            src="/img/banner_img_1.png"
            alt="Trabajadores"
            width={340} // 📌 Cambia este valor para ajustar el tamaño de la imagen
            height={220}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
