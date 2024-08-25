import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    service: "",
    message: "",
  });

  const [dataErrors, setDataErrors] = useState({});
  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setDataErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const req = await fetch("http://localhost:4000/contacto/success", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await req.json();
      setResult(res);
      console.log(result);
    } else {
      console.log("errorsss");
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Es necesario escribir un nombre";
    }
    if (!formData.email.trim()) {
      errors.email = "Es necesario escribir una dirección de correo";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo es invalido";
    }

    if (!formData.tel.trim()) {
      errors.tel = "Es necesario un telefono";
    }
    if (!formData.service) {
      errors.service = "Es necesario seleccionar un servicio";
    }

    if (!formData.message.trim()) {
      errors.message = "Es necesario un mensaje";
    }
    return errors;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row w-full max-w-7xl">
        <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-green-500">
            Ponte en Contacto
          </h2>
          <div className="mb-6">
            <p>
              <strong>Dirección:</strong> Calle 33 # 30 - 19 Barrio La Aurora,
              Bucaramanga - Santander
            </p>
            <p>
              <strong>Teléfonos:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>Fijo: (607) 696 07 85</li>
              <li>Móvil 1: +57 321 344 1629</li>
              <li>Móvil 2: +57 316 750 3826</li>
              <li>WhatsApp: +57 321 344 1629</li>
            </ul>
            <p>
              <strong>Email:</strong> veterinariapetshop@hotmail.com
            </p>
            <p>
              <strong>Servicios:</strong> Hotel y Colegio
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Nombre:<span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Nombre"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />
              {dataErrors.name && (
                <span className="text-red-500">{dataErrors.name}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                E-mail:<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="E-mail"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />
              {dataErrors.email && (
                <span className="text-red-500">{dataErrors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="tel" className="block text-gray-700">
                Teléfono:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Teléfono"
                onChange={(e) =>
                  setFormData({ ...formData, tel: e.target.value })
                }
                value={formData.tel}
              />
              {dataErrors.tel && (
                <span className="text-red-500">{dataErrors.tel}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700">
                Seleccionar servicio:<span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                value={formData.service}
              >
                <option value="">Seleccionar servicio...</option>
                <option value="consulta">Consulta</option>
                <option value="vacunacion">Vacunación</option>
                <option value="hotel">Hotel</option>
                <option value="colegio">Colegio</option>
              </select>
              {dataErrors.service && (
                <span className="text-red-500">{dataErrors.service}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700">
                Escribe aquí tu mensaje:<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Escribe aquí tu mensaje..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
              ></textarea>
              {dataErrors.message && (
                <span className="text-red-500">{dataErrors.message}</span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                onClick={handleSubmit}
              >
                ENVIAR MENSAJE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
