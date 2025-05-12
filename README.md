# IPWA01-01-Kleiderspenden-Registrierung
Es wird verlangt eine Website zu bauen, damit der User vor Ort oder ein Abholservice bestellen kann

## 🧱 Verwendete Technologien
- ⚛️ React
- 🟦 TypeScript
- 🎛️ Bootstrap
- 🌐 React Router

zusätzlich habe ich im chrome und firefox die React Developer Tools Extension installiert, dass wenn es nötig ist, Debuggen zu können. 

## Features
- Weltkarte um die Kriesenregionen auszuwählen
- localStorage als Datenbank verwenden
- Eine Darstellung von allen Kleiderspenden

## 📁 Projektstruktur

```text
IPWA01-01-Kleiderspenden-Registrierung/
├── public/
│   ├── backgroundImage.png
│   └── Hoffnungsfaden_GmbH.png
├── src/
│   ├── assets/                 
│   ├── components/             
│   │   ├── context/
│   │   |   └── ClothDonation.tsx
│   │   ├── ui/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── WorldMap.tsx
│   ├── css/               
│   │   ├── App.css
│   │   ├── index.css
│   │   └── ClothDonationScreen.css
│   ├── data/
│   │   └── countries.geojson
│   ├── pages/
│   │   ├── AgbScreen.tsx
│   │   ├── ClothDonationScreen.tsx
│   │   ├── FormScreen.tsx
│   │   ├── ImpressumScreen.tsx
│   │   ├── PrivacyScreen.tsx
│   │   ├── RegistrationScreen.tsx                 
│   │   └── HomeScreen.tsx
│   ├── lib/                    
│   │   └── Types.tsx
│   ├── vite-env.d.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── index.html
├── package-lock.json
└── package.json