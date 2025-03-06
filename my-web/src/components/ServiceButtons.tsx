  import Navbar from "@/components/Navbar";
  import SearchBar from "@/components/SearchButton";
  import ServiciosBar from "@/components/serviciosBar";

  const ServiceButtons = () => {
    return (
      <section className="py-10 text-center h-full">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SearchBar />
        </div>
        <ServiciosBar/>
      </section>
    );
  };

  export default ServiceButtons;


  
