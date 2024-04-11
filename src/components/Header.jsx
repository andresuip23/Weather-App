function Header() {
    return ( 
    <>
    <header className="bg-indigo-default bg-opacity-35">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Logo</h1>
        <nav className="space-x-4 pl-24">
          <button className="text-white">Home</button>
          <button className="">Weather Today</button>
          <button className="">About Us</button>
        </nav>
      <div>
      <input
        type="text"
        placeholder="Busca un pais..."
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
        Buscar
      </button>
      </div>

      </div>
    </header>
    </>


     );
}

export default Header;