function Footer() {
    return ( 
        <>
        <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>© 2024 Nombre de tu empresa</p>
        </div>
        <div>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="hover:text-white">Inicio</a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-white">Acerca de</a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-white">Servicios</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>        
        </>
     );
}

export default Footer;