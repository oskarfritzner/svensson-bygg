import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">Svensson Bygg</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Vi leverer kvalitets dusjløsninger, glass og montasje. Sjur og
              teamet vårt sikrer at du får den beste løsningen for ditt
              prosjekt.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+4712345678"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Telefon</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:info@svenssonbygg.no"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">E-post</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hurtiglenker</h3>
            <div className="space-y-2">
              <div>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Hjem
                </Link>
              </div>
              <div>
                <Link
                  to="/tjenester"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tjenester
                </Link>
              </div>
              <div>
                <Link
                  to="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <div className="space-y-2">
              <div>
                <span className="text-gray-300">Dusjløsninger</span>
              </div>
              <div>
                <span className="text-gray-300">Glass</span>
              </div>
              <div>
                <span className="text-gray-300">Montasje</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 Svensson Bygg. Alle rettigheter forbeholdt.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Vilkår
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
