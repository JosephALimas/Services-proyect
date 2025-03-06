const announcements = [
  "Nuevo servicio de mantenimiento disponible.",
  "Promoción especial para clientes nuevos.",
];

const Announcements = () => {
  return (
      <section className="py-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
              Muro de Anuncios
          </h2>
          <ul className="max-w-2xl mx-auto space-y-4 list-none text-gray-300">
              {announcements.map((announcement, index) => (
                  <li 
                      key={index} 
                      className="p-4 bg-gray-800 shadow-lg rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                      {announcement}
                  </li>
              ))}
          </ul>
      </section>
  );
};

export default Announcements;