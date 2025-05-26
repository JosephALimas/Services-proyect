// components/NavbarSecondary.tsx
import Image from "next/image";
import Link from "next/link";

const NavbarSecondary = () => {
  return (
    <nav className="bg-sky-500 px-6 py-2 shadow">
      {/* 📌 Puedes ajustar el ancho máximo modificando `max-w-7xl` */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 📌 Sección izquierda: Logo y nombre */}
        <div className="flex items-center space-x-3">
          <Image
            src="/img/logo1.png"
            alt="Logo A tu servicio"
            width={80} // 📌 Ajusta aquí el ancho
            height={80} // 📌 Ajusta aquí la altura
            priority // 📌 (opcional) hace que cargue más rápido
          />
          <span className="text-white font-bold text-3xl">A tu servicio</span>
        </div>

        {/* 📌 Sección derecha: Links */}
        <div className="text-white space-x-6 text-3xl">
          <Link href="#" className="hover:underline">Más información</Link>
          <Link href="#" className="hover:underline">Ayuda</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSecondary;
