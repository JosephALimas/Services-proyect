"use client";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner_2";
import ActionButton from "@/components/Action_button";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ImageButton from "@/components/ImageButton";
import RecentButton from "@/components/RecentButton";
import "@/styles/global.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 🧱 Contenido principal (todo menos el footer) */}
      <div className="flex-grow">
        <Navbar />
        <Banner />

        {/* 🧩 Contenedor con dos columnas */}
        <div
          className="flex flex-col md:flex-row gap-6 mx-10 md:mx-20 my-8"
          // 📝 mx-6 = margen horizontal en pantallas pequeñas
          // 📝 md:mx-20 = margen horizontal más amplio en pantallas medianas o grandes
          // 📝 my-8 = margen vertical superior e inferior
        >
          {/* 🧩 Columna izquierda */}
          <div
            className="flex-1 p-4 md:p-6 flex flex-col items-center space-y-8"
            // 📝 p-4 / md:p-6 = padding interno
            // 📝 items-center = centra horizontalmente los elementos
            // 📝 space-y-6 = margen vertical entre elementos
          >
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
            <div className="w-full max-w-md">
              <RecentButton text="Texto de ejemplo" />
            </div>
            <div className = "w-full max-w-md">
                <h2 className = "text-xl font-normal text-gray-400">Sugerencias</h2>
            </div>
            <div className="w-full max-w-md flex justify-center">
              <ImageButton
                imageSrc="/img/escoba_icon.png"
                alt="Limpieza"
              />
            </div>
          </div>

          {/* 🧩 Columna derecha */}
          <div
            className="flex-1 p-4 md:p-6 flex flex-col items-center space-y-6"
          >
            {/* Aquí va el contenido de la derecha */}
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex justify-center">
          {/* Otros elementos opcionales */}
        </div>
      </div>

      {/* Footer separado al fondo */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
