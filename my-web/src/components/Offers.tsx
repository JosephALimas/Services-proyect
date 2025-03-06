const offers = [
  { title: "Descuento en limpieza", description: "20% de descuento en el primer servicio." },
  { title: "Oferta de cerrajería", description: "Cambio de cerraduras a precio reducido." },
  { title: "Oferta de Carpintero", description: "Ajuste personalizado." },
  { title: "Oferta de plomero", description: "Descuento del 20% en caso especial." }
];

const Offers = () => {
  return (
      <section className="py-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ofertas Especiales</h2>
          <div className="max-w-3xl mx-auto space-y-4">
              {offers.map((offer, index) => (
                  <div 
                      key={index} 
                      className="p-6 bg-gray-800 shadow-lg rounded-lg hover:scale-105 transition duration-300"
                  >
                      <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
                      <p className="text-gray-400">{offer.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
};

export default Offers;