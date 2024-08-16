export default function Footer() {
  return (
    <footer className="bg-blue-700  shadow w-full dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          <a href="/" className="hover:underline">
            Vital pets Central de Urgencias
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Inicio
            </a>
          </li>
          <li>
            <a href="/contacto" className="hover:underline me-4 md:me-6">
              Contáctenos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
