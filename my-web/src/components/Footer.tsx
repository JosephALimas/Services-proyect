// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cyan-100 px-6 py-8">
      {/* 📌 Contenedor general centrado, ajusta el tamaño con max-w-* */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        
        {/* 🧱 Columna 1 - Información general o branding */}
        <div>
          {/* 📌 Título de sección. Cambia el tamaño con text-xl, text-2xl, etc. */}
          <h3 className="text-xl mb-3">
            A tu servicio
          </h3>
          {/* 📌 Enlaces de esta sección */}
          <Link href="#" className="block text-lg hover:underline">
            Contáctanos
          </Link>
        </div>

        {/* 🧱 Columna 2 - Servicios ofrecidos */}
        <div>
          <h3 className="text-xl mb-3">
            Servicios
          </h3>
          <Link href="#" className="block text-lg hover:underline">Limpieza</Link>
          <Link href="#" className="block text-lg hover:underline">Plomería</Link>
          <Link href="#" className="block text-lg hover:underline">Electricidad</Link>
        </div>

        {/* 🧱 Columna 3 - Información legal u otros recursos */}
        <div>
          <h3 className="text-xl mb-3">
            Información
          </h3>
          <Link href="#" className="block text-lg hover:underline">Términos</Link>
          <Link href="#" className="block text-lg hover:underline">Privacidad</Link>
          <Link href="#" className="block text-lg hover:underline">Soporte</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;