# Svensson Bygg - Nettside

En moderne nettside for Svensson Bygg, en byggebedrift som leverer dusjløsninger, glass og montasje.

## 🚀 Funksjoner

- **Responsivt design** - Fungerer perfekt på alle enheter
- **Moderne UI** - Bygget med Tailwind CSS
- **TypeScript** - Type-sikker kode
- **React Router** - Enkel navigasjon mellom sider
- **Kontaktskjema** - Med validering og feilhåndtering
- **SEO-optimalisert** - Med riktige meta-tagger

## 📋 Sider

- **Hjemmeside** - Oversikt over tjenester og bedriften
- **Tjenester** - Detaljert informasjon om dusjløsninger, glass og montasje
- **Kontakt** - Kontaktskjema og kontaktinformasjon

## 🛠️ Teknologier

- **React 18** - Frontend framework
- **TypeScript** - Type-sikker JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Klient-side routing
- **Vite** - Build tool og development server

## 📦 Installasjon

1. **Klon prosjektet**

   ```bash
   git clone [repository-url]
   cd SvenssonBygg
   ```

2. **Installer avhengigheter**

   ```bash
   npm install
   ```

3. **Start utviklingsserver**

   ```bash
   npm run dev
   ```

4. **Åpne nettleseren**
   Gå til `http://localhost:5173`

## 🏗️ Bygg for produksjon

```bash
npm run build
```

Dette lager en optimalisert versjon av nettsiden i `dist/` mappen.

## 📁 Prosjektstruktur

```
src/
├── components/          # Gjenbrukbare komponenter
│   ├── Navbar.tsx      # Navigasjonsmeny
│   └── Footer.tsx      # Bunntekst
├── pages/              # Sider
│   ├── HomePage.tsx    # Hjemmeside
│   ├── ServicesPage.tsx # Tjenesteside
│   └── ContactPage.tsx # Kontaktside
├── types/              # TypeScript typer
│   └── index.ts        # Type definisjoner
├── App.tsx             # Hovedapplikasjon
├── main.tsx            # Applikasjonsstartpunkt
└── index.css           # Globale stiler
```

## 🎨 Tilpasning

### Farger

Fargene kan tilpasses i `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... flere nyanser
  }
}
```

### Innhold

- Tekst kan endres direkte i komponentene
- Bilder kan legges til i `public/` mappen
- Kontaktinformasjon kan oppdateres i `ContactPage.tsx`

## 📞 Kontaktinformasjon

**Svensson Bygg**

- Telefon: +47 123 45 678
- E-post: info@svenssonbygg.no
- Adresse: Byggeveien 123, 1234 Oslo, Norge

## 📝 Lisens

Dette prosjektet er laget for Svensson Bygg. Alle rettigheter forbeholdt.

## 🤝 Bidrag

For å bidra til prosjektet:

1. Fork prosjektet
2. Opprett en feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit endringene (`git commit -m 'Add some AmazingFeature'`)
4. Push til branchen (`git push origin feature/AmazingFeature`)
5. Opprett en Pull Request

## 📞 Support

Hvis du har spørsmål eller trenger hjelp, ta kontakt med utvikleren eller Svensson Bygg direkte.
