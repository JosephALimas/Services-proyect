import Navbar from "@/components/Navbar";
import ServiceButtons from "@/components/ServiceButtons";
import CompanyInfo from "@/components/CompanyInfo";
import Offers from "@/components/Offers";
import Announcements from "@/components/Announcements";
import Profile from "@/components/Profile";
import "@/styles/global.css"; // Importamos los estilos globales
import Title from "@/components/Title";

export default function Home() {
  return (
<div className="min-h-screen grid grid-rows-[auto_auto_1fr_auto] grid-cols-4 gap-1 p-4 background bg-gray-900">
  {/* Título - Ocupa todas las columnas y es la primera fila */}
  <div className="col-span-4">
    <Title />
  </div>
  {/* Resto del layout como antes */}
  {/* Service Buttons - Ocupa la parte principal izquierda */}
  <div className="col-span-3 row-span-1 p-4 rounded-lg">
    <ServiceButtons />
  </div>

  {/* Ofertas - Arriba a la derecha */}
  <div className="col-span-1 row-span-1 rounded-lg p-4 shadow-lg">
    <Offers />
  </div>

  {/* Anuncios - Debajo de Ofertas */}
  <div className="col-span-3 row-span-2 rounded-lg p-4 ">
    <CompanyInfo />
  </div>

  {/* Company Info - Ocupa la parte baja izquierda */}
  <div className="col-span-1 row-span-1 rounded-lg p-4 shadow-lg">
    <Announcements />
  </div>

</div>

  );
}
