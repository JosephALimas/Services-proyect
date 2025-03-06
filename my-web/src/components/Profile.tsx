const Profile = () => {
    return (
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Perfil</h2>
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg" 
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
          <p className="mt-4 text-lg font-semibold text-gray-700">Nombre del usuario</p>
        </div>
      </section>
    );
  };
  
  export default Profile;
  