function Home() {
    return ( 
        <>
         <section className="bg-blue-500 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">¡Explora el mundo y su clima con facilidad!</h2>
          <p className="text-lg mb-4">Encuentra el clima actual y pronósticos para cualquier país alrededor del mundo. ¡Planifica tus viajes y actividades al aire libre con confianza!</p>
          <a href="" className="bg-white text-blue-500 hover:bg-blue-600 py-2 px-4 rounded inline-block font-semibold">Empieza Ahora</a>
        </div>
        <div className="lg:w-1/2">
          {/* Aquí puedes agregar una imagen o un video promocional */}
          <img src="" alt="Publicidad" className=" rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
        </>
     );
}

export default Home;