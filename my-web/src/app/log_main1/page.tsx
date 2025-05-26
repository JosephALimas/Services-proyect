"use client";
import Navbar from "@/components/Navbar_secundaria";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput_login";
import "@/styles/global.css";
import { useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 🧱 Contenido principal (todo menos el footer) */}
      <div className="flex-grow">
        <Navbar />
        <Banner />
        <div className="max-w-4xl mx-auto flex justify-center grid grid-cols-2 gap-4">
            <div className="">
                <TextInput
                    placeholder="Busca un servicio"
                    className="mt-20 py-5 px-9"
                />
            </div>
            <div className=""> 
                <h2 className="text-xl text-center text-gray-800 m-10">
                    Servicios cercanos
                </h2>
            </div>
        </div>
      </div>

      {/* Footer separado al fondo */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
