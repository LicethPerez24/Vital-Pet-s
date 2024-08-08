

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row w-full max-w-7xl">
        <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-green-500">Ponte en Contacto</h2>
          <div className="mb-6">
            <p><strong>Dirección:</strong> Calle 33 # 30 - 19 Barrio La Aurora, Bucaramanga - Santander</p>
            <p><strong>Teléfonos:</strong></p>
            <ul className="list-disc pl-5">
              <li>Fijo: (607) 696 07 85</li>
              <li>Móvil 1: +57 321 344 1629</li>
              <li>Móvil 2: +57 316 750 3826</li>
              <li>WhatsApp: +57 321 344 1629</li>
            </ul>
            <p><strong>Email:</strong> veterinariapetshop@hotmail.com</p>
            <p><strong>Servicios:</strong> Hotel y Colegio</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre:</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Nombre" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">E-mail:</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="E-mail" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Teléfono:</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Teléfono" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Seleccionar servicio:</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded">
                <option value="">Seleccionar servicio...</option>
                <option value="consulta">Consulta</option>
                <option value="vacunacion">Vacunación</option>
                <option value="hotel">Hotel</option>
                <option value="colegio">Colegio</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Escribe aquí tu mensaje:</label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Escribe aquí tu mensaje..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">ENVIAR MENSAJE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


