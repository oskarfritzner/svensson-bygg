import { Link } from "react-router-dom";
import type { Service } from "../types";

const services: Service[] = [
  {
    id: "dusjlosninger",
    title: "Dusjløsninger",
    description:
      "Vi leverer moderne og funksjonelle dusjløsninger tilpasset ditt bad og dine behov. Fra enkle dusjkabinett til luksuriøse spa-løsninger.",
    image: "/images/dusjlosninger.jpg",
    features: [
      "Dusjkabinett i alle størrelser",
      "Dusjdører og glass",
      "Dusjrenner og avløp",
      "Dusjhoder og armatur",
      "Tilpassede løsninger",
      "Profesjonell installasjon",
    ],
    price: "Fra 15.000 kr",
  },
  {
    id: "glass",
    title: "Glass",
    description:
      "Kvalitets glass for alle typer prosjekter. Vi leverer alt fra enkle glass til komplekse glassløsninger for både private og kommersielle prosjekter.",
    image: "/images/glass.jpg",
    features: [
      "Badglass og dusjglass",
      "Glass til kontorer",
      "Glass til butikker",
      "Skillevægger i glass",
      "Glass til trapper",
      "Tilpassede glassløsninger",
    ],
    price: "Fra 8.000 kr",
  },
  {
    id: "montasje",
    title: "Montasje",
    description:
      "Profesjonell montasje av alle våre produkter. Vi sikrer at installasjonen blir gjort riktig første gang, hver gang.",
    image: "/images/montasje.jpg",
    features: [
      "Profesjonell installasjon",
      "Rask og effektiv montasje",
      "Minimal støy og støv",
      "Ryddig etter jobb",
      "Kvalitetskontroll",
      "Garanti på montasje",
    ],
    price: "Fra 2.500 kr",
  },
];

const additionalServices = [
  {
    title: "Befaring og tilbud",
    description: "Gratis befaring og personlig tilbud for alle prosjekter",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Etterkundeservice",
    description:
      "Vi står bak vårt arbeid og tilbyr omfattende etterkundeservice",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
      </svg>
    ),
  },
  {
    title: "Garanti",
    description: "Full garanti på alle produkter og installasjoner",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-32">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Våre tjenester
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Vi leverer komplett løsninger innen dusjløsninger, glass og
            montasje. Alt fra planlegging til ferdig installasjon med
            kvalitetsgaranti.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg
                          className="w-10 h-10 text-primary-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">Bilde kommer snart</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-12">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                      Hva vi tilbyr:
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <svg
                              className="w-3 h-3 text-primary-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="pricing-card">
                      <p className="pricing-label">Pris fra</p>
                      <p className="pricing-amount">{service.price}</p>
                    </div>
                    <Link
                      to="/kontakt"
                      className="btn-primary btn-large self-start"
                    >
                      Få tilbud
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ekstra tjenester
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Vi tilbyr mer enn bare produkter. Vi sikrer at du får den beste
              opplevelsen fra første kontakt til ferdig installasjon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
