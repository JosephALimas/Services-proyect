"use client";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ActionButton from "@/components/Action_button";
import Footer from "@/components/Footer";
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
        <div className="max-w-4xl mx-auto flex justify-center">
          <ActionButton
            text="Inicia sesión"
            className="mx-10 my-10"
            onClick={() => router.push("login")}
          />
          <ActionButton
            text="Registrarse"
            className="mx-10 my-10"
            onClick={() => router.push("register_user")}
          />
        </div>
      </div>

      {/* Footer separado al fondo */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
