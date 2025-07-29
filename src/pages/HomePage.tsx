import { Link } from "react-router-dom";

const services = [
  {
    id: "dusjlosninger",
    title: "Dusjløsninger",
    description: "Moderne og funksjonelle dusjløsninger tilpasset ditt bad",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "glass",
    title: "Glass",
    description: "Kvalitets glass for alle typer prosjekter og behov",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: "montasje",
    title: "Montasje",
    description: "Profesjonell montasje av alle våre produkter",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
  },
];

const features = [
  "Gratis befaring og tilbud",
  "Erfaren og pålitelig",
  "Kvalitetsgaranti",
  "Rask levering",
  "Konkurransedyktige priser",
  "Etterkundeservice",
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Kvalitets dusjløsninger og glass
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-12 leading-relaxed">
                Sjur Svensson leverer profesjonelle løsninger for ditt bad og
                glassprosjekter. Vi sikrer kvalitet og tilfredshet i hvert
                prosjekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/kontakt" className="btn-white btn-large text-center">
                  Få gratis tilbud
                </Link>
                <Link
                  to="/tjenester"
                  className="btn-outline-white btn-large text-center"
                >
                  Se våre tjenester
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-6">Gratis befaring</h3>
                  <p className="text-primary-100 mb-8 leading-relaxed">
                    Vi kommer ut og gir deg et personlig tilbud basert på dine
                    behov
                  </p>
                  <Link to="/kontakt" className="btn-primary">
                    Bestill befaring
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Våre tjenester
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Vi leverer komplett løsninger innen dusjløsninger, glass og
              montasje. Alt fra planlegging til ferdig installasjon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/tjenester"
                  className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  Les mer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Hvorfor velge Svensson Bygg?
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Vi har bygget opp et solid rykte på å levere kvalitet og
                tilfredshet. Våre kunder vet at de kan stole på oss.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
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
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Kvalitetsgaranti
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Vi står bak vårt arbeid med full garanti. Din tilfredshet er
                  vår prioritet.
                </p>
                <Link to="/kontakt" className="btn-primary btn-large">
                  Kontakt oss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-32">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Klar til å starte ditt prosjekt?
          </h2>
          <p className="text-lg text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ta kontakt med oss i dag for en gratis befaring og personlig tilbud.
            Vi hjelper deg med å realisere ditt prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/kontakt" className="btn-white btn-large text-center">
              Få gratis tilbud
            </Link>
            <a
              href="tel:+4712345678"
              className="btn-outline-white btn-large text-center"
            >
              Ring oss nå
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
