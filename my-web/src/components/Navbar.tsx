// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-sky-500 px-6 py-2 shadow">
      {/* 📌 Puedes ajustar el ancho del contenido modificando el valor de `max-w-4xl` a `max-w-5xl`, `max-w-6xl`, etc. */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Sección izquierda: Logo y nombre */}
        <div className="flex items-center space-x-2">
          <Image
            src="/img/logo1.png"
            alt="Logo A tu servicio"
            width={80}
            height={80}
          />
          <span className="text-white font-bold text-3xl">A tu servicio</span>

          {/* Botones Log in y Registrarse */}
          <button onClick = {() => router.push("login")} className="ml-4 bg-white text-black text-xl px-3 py-1 rounded-full hover:bg-gray-100 shadow-md transition">
            Log in
          </button>
          <button onClick = {() => router.push("register_user")} className="ml-2 bg-white text-black text-xl px-3 py-1 rounded-full hover:bg-gray-100 shadow-md transition">
            Registrarse 
          </button>
        </div>

        {/* Sección derecha: Links */}
        <div className="text-white space-x-4 text-3xl">
          <Link href="#" className="hover:underline">Más información</Link>
          <Link href="#" className="hover:underline">Ayuda</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
