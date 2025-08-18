# 📝 Entwickler-Dokumentation



## 🔹 Abschnitt 1

## Projektübersicht

Dieses Projekt ist anscheinend eine React-basierte Webanwendung, die von einem Vite-Bundler unterstützt wird. Sie bietet eine Plattform für die Verwaltung von Kleiderspenden, einschließlich einer interaktiven Weltkarte und mehreren Seitenseiten wie Impressum, Datenschutz usw. Die Anwendung nutzt TypeScript für die Typüberprüfung und verwendet ESLint zur Code-Qualitätssicherung.

### Konfigurationen

1. **ESLint Konfiguration (`eslint.config.js`)**
   - Importiert empfohlene Konfigurationen für JavaScript und TypeScript.
   - Konfiguriert die Verwendung von Plugins wie React-Hooks und React-Refresh.
   - Lintet TypeScript-Dateien (`*.ts`, `*.tsx`), ignoriert dabei das `dist`-Verzeichnis.
   - Definiert Regeln für React-Hooks und spezielle Exportregeln für React-Komponenten.

2. **TypeScript Konfigurationen**

   - **App-Konfiguration (`tsconfig.app.json`)**: 
     - Zielumgebung ist ES2020 mit Unterstützung für Browser-APIs.
     - Definiert strikte Linting-Optionen und verhindert den Ausgabe-Build (`noEmit: true`).
     - Setzt JSX in der `react-jsx` Form voraus.

   - **Allgemeine Konfiguration (`tsconfig.json`)**
     - Verwendet Projektreferenzen auf spezifische Konfigurationen für Apps und Node.
     - Die allgemeine Striktheitsoption ist hier auf `false` gesetzt.

   - **Node-Konfiguration (`tsconfig.node.json`)**
     - Zielumgebung ist ES2022 mit Unterstützung für Node-Features.
     - Enthält ähnliche Linting-Optionen wie die App-Konfiguration und kein Emittieren von Build-Artefakten.

### Projektstruktur

1. **Vite Konfiguration (`vite.config.ts`)**
   - Verwendet das Vite-Plugin für React, um moderne Features zu nutzen und den Entwicklungs-Workflow zu optimieren.

2. **HTML Hauptstruktur (`index.html`)**
   - Stellt die Grundstruktur der Anwendung bereit, mit einem Mounting-Punkt für React (`<div id="root"></div>`).
   - Lädt das Hauptmodul der App (`/src/main.tsx`).

3. **React-Komponenten**

   - **`App.tsx`**: Definiert die Hauptanwendungskomponente mit Router-Steuerung für verschiedene Seiten.
   - **`WorldMap.tsx`**: Bietet eine interaktive Weltkarte, die geografische Daten anzeigt und mit React Leaflet erstellt wird. Ermöglicht das Auswählen von Ländern und das Aktualisieren des Kontextes entsprechend.

4. **Context-Management (`ClothDonation.tsx`)**
   - Implementiert ein Context-API, um die Daten von Kleiderspenden global innerhalb der Anwendung zu managen. Es gibt Methoden zur Aktualisierung und Speicherung von Spendeninformationen.

5. **Frontend UI-Komponenten**

   - **Header (`Header.tsx`)** und **Footer (`Footer.tsx`)**: Verwenden Bootstrap für das Styling und bieten Navigationskomponenten der seitlichen Struktur.
   - **Layout (`Layout.tsx`)**: Kombiniert Header, Footer und den dynamischen Inhaltsbereich (mittels `Outlet`).

6. **Stile und CSS**

   - Applikationsweite Stile sind in mehreren CSS-Dateien verteilt, um das Aussehen und Verhalten der Komponenten zu definieren. Sie verwenden CSS-Variablen für konsistente Farbschemata und Styling.

7. **Datentypen (`Types.tsx`)**
   - Definiert Typen und Schnittstellen zur Typüberprüfung in der Anwendung, wie etwa für das Kleiderspendenformular (`ClothDonationType`).

### Zusammenfassung
Diese Webanwendung vereint moderne Webentwicklungstechniken mit einer strukturieren Projektorganisation, um ein benutzerfreundliches Interface für Kleiderspendenmanagement zu bieten. Die Nutzung von TypeScript und ESLint sichert die Codeintegrität und verminderte Wartungsprobleme, während Vite schnelles Entwickeln und Build-Prozesse unterstützt.

## 🔹 Abschnitt 2

## Technische Dokumentation des Codes

### Datei: `src/pages/AgbScreen.tsx`

#### Component: `AGB`

- **Beschreibung**: Diese Komponente rendert eine Webseite, die die Allgemeinen Geschäftsbedingungen (AGB) der Hoffnungsfaden GmbH darstellt. Die AGB regeln die Bedingungen für die Annahme und Nutzung von Spenden. 

- **Aufbau**: 
  - **Container**: Die gesamte AGB wird in einem `div` Container mit zusätzlichen Abständen (`mt-5` und `mb-5`) versehen.
  - **Titel**: Ein zentriert ausgerichteter Titel `Allgemeine Geschäftsbedingungen (AGB)`.
  - **Inhalt**: Der Schwerpunkt liegt auf Textabschnitten, die die einzelnen Geschäftsbedingungen beschreiben. Diese sind nummeriert von 1 bis 8 und decken Themen wie den Geltungsbereich, Spendenannahme, Zustand der Spenden, Eigentumsübertragung, Nutzung der Spenden, Haftung, Änderungen der AGB und das anwendbare Recht ab.

- **Rückgabewert**: JSX-Element zur Darstellung der AGB.

- **Export**: Standardexport der `AGB` Komponente.

### Datei: `src/pages/ClothDonationScreen.tsx`

#### Component: `ClothDonationScreen`

- **Beschreibung**: Diese Komponente stellt eine Benutzeroberfläche dar, die es den Nutzern ermöglicht, ihre Kleidungsdatenspenden anzusehen, zu durchsuchen, zu sortieren, zu bearbeiten und zu löschen.

- **State Management**:
  - **`clothDonations`**: Ein Array, das Kleidungsdatenspenden speichert, abgerufen aus `localStorage`.
  - **`searchTerm`**: Speichert den aktuellen Suchbegriff zur Filterung der Spenden.
  - **`sortField`**: Gibt das Feld an, nach dem die Tabellenzeilen sortiert werden sollen.
  - **`sortDirection`**: Gibt die Sortierrichtung an, entweder aufsteigend ("asc") oder absteigend ("desc").
  - **`editKey`**: Ein optionaler Schlüssel, der die aktuell zur Bearbeitung ausgewählte Spende identifiziert.
  - **`editedData`**: Speichert die während der Bearbeitung temporär gehaltenen Daten.

- **Lifecycle Method**:
  - **`useEffect`**: Wird verwendet, um die Spenden aus `localStorage` zu laden, sobald die Komponente erstmals gerendert wird.

- **Methoden**:
  - **`handleSearch`**: Aktualisiert `searchTerm` basierend auf Benutzereingaben.
  - **`handleResetSearch`**: Setzt das Suchfeld zurück.
  - **`handleSort`**: Aktualisiert die Sortierlogik in Abhängigkeit des ausgewählten Felds.
  - **`handleDelete`**: Entfernt einen Spendeeintrag sowohl aus `localStorage` als auch aus dem Komponenten-State.
  - **`handleEdit`**: Aktiviert den Bearbeitungsmodus für einen bestimmten Eintrag.
  - **`handleChange`**: Aktualisiert `editedData` während der Bearbeitung eines Eintrags.
  - **`handleSave`**: Speichert die bearbeiteten Daten im `localStorage` und aktualisiert den Komponenten-State.
  - **`handleCancel`**: Beendet den Bearbeitungsmodus ohne Änderungen zu speichern.
  - **`renderSortArrow`**: Rendert einen visuellen Indikator (Pfeil) neben Spaltenüberschriften, um die aktuelle Sortierrichtung anzuzeigen.

- **Rendering Logic**:
  - **Suchfeld**: Ermöglicht die Eingabe eines Suchbegriffs.
  - **Tabelle**: Stellt die Spendeninformationen dar. Die Tabelle unterstützt Sortierung, Filterung und die Bearbeitung von Einträgen.

- **Export**: Standardexport der `ClothDonationScreen` Komponente.

### Styling & Integration
- Die Komponente verwendet eine externe CSS-Datei (`../css/ClothDonationScreen.css`) für spezifische Formatierungen und Bootstrap-Icons (`bootstrap-icons`) für Symbole innerhalb der Buttons (z.B. speichern, bearbeiten, löschen).

Diese Dokumentation bietet eine grundlegende Übersicht über die jeweiligen Komponenten, ihre Funktionsweise und wie sie in der Anwendung integriert sind.

## 🔹 Abschnitt 3

# Technische Dokumentation: Kleidungsdonations-Website

## Überblick

Dieses Projekt enthält verschiedene React-Komponenten, die eine Plattform zur Bereitstellung von Kleiderspenden darstellen. Die Anwendung ermöglicht es den Benutzern, Kleidung entweder persönlich abzugeben oder eine Abholung zu beantragen. Es gibt verschiedene Screens (Seiten), die unterschiedliche Funktionen bieten.

## Komponentenübersicht

### 1. FormScreen: Spendenregistrierung

**Datei:** `src/pages/FormScreen.tsx`

Diese Komponente bietet ein Formular zur Erfassung von Kleiderspendendaten. Sie ermöglicht es den Benutzern, zwischen einer Übergabe an der Geschäftsstelle oder einer Abholung zu wählen. Je nach Wahl können unterschiedliche Eingabefelder für Benutzerdaten angezeigt werden.

#### Hauptfunktionen:
- **State Management:** Zwei Kontrollkästchen werden gemeinsam verwaltet (`checkBoxOffice`, `checkBoxVehicle`), um den Spendenprozess zu steuern.
- **Formularvalidierung:** Zip-Codes und andere Eingabefelder werden anhand von Länge und Präfix auf Validität geprüft.
- **Action Dispatch:** Nutzereingaben werden gesammelt und an einen zentralen Kontext übergeben, um die Daten zwischen verschiedenen Komponenten zu teilen.
- **Navigation:** Leitet Benutzer zur Registrierungsseite weiter, nachdem das Formular erfolgreich gesendet wurde.

### 2. HomeScreen: Startseite

**Datei:** `src/pages/HomeScreen.tsx`

Bietet eine Willkommensnachricht und erklärt den Zweck der Plattform. Enthält einen Link zur Spendenregistrierung.

### 3. ImpressumScreen: Impressum

**Datei:** `src/pages/ImpressumScreen.tsx`

Zeigt rechtliche Informationen gemäß § 5 TMG an, einschließlich Kontaktinformationen und Haftungsausschluss.

### 4. PrivacyScreen: Datenschutzerklärung

**Datei:** `src/pages/PrivacyScreen.tsx`

Informiert Benutzer über die Datenschutzpraktiken der Plattform, einschließlich der Verantwortlichen Stelle, erfassten Datenarten und der Benutzerrechte.

### 5. RegistrationScreen: Spenden Bestätigung

**Datei:** `src/pages/RegistrationScreen.tsx`

Bestätigt den Erhalt einer Kleiderspende und listet die registrierten Informationen auf. Es wird überprüft, ob die Benutzerdaten nach einem erneuten Laden der Seite weiterhin vorhanden sind und speichert diese in `localStorage`.

## Datenfluss und Zustandsverwaltung

Der Zustand der Anwendung wird mit React-Hooks verwaltet. `useState` verwaltet lokale Eingabewerte, während der Anwendungszustand über einen benutzerdefinierten Kontext (`useHandover`) global verwaltet wird. Diese Architektur erleichtert die gemeinsame Nutzung von Daten zwischen verschiedenen Komponenten und ermöglicht eine flexible Verwaltung des Datenflusses innerhalb der Anwendung.

## Routing

Die Anwendung nutzt React Router für Navigationszwecke. Jede Seite der Anwendung ist über unterschiedliche Routen zugänglich, sodass Benutzer zwischen verschiedenen Ansichten wechseln können, ohne die Anwendung zu verlassen.

## Stile

Die Anwendung verwendet Bootstrap-Klassen und ein benutzerdefiniertes Styling für bestimmte Elemente, um ein konsistentes und ansprechendes Design zu gewährleisten.

---

Dies ist eine zusammenfassende technische Dokumentation. Für detailliertere Informationen sollten Entwickler den Quellcode durchgehen und das Verhalten der Anwendung durch direktes Ausprobieren beobachten.

---

## 📘 Zusammenfassung

# Entwickler-Dokumentation für die Kleidungsdonations-Website

## Inhaltsverzeichnis

1. [Projektübersicht](#projektübersicht)
2. [Installation und Einrichtung](#installation-und-einrichtung)
3. [Projektstruktur](#projektstruktur)
4. [Konfigurationen](#konfigurationen)
5. [Komponentenübersicht](#komponentenübersicht)
6. [Datenfluss und Zustandsverwaltung](#datenfluss-und-zustandsverwaltung)
7. [Routing](#routing)
8. [Stile und CSS](#stile-und-css)
9. [Zusammenfassung](#zusammenfassung)

## Projektübersicht

Die Kleidungsdonations-Website ist eine React-basierte Webanwendung, die die Verwaltung von Kleiderspenden ermöglicht. Sie bietet eine interaktive Weltkarte und verschiedene administrative Seiten wie Impressum und Datenschutz. Die Anwendung ist mit dem Vite-Bundler erstellt und verwendet TypeScript für die Typüberprüfung. ESLint wird für die Sicherung der Codequalität verwendet.

## Installation und Einrichtung

1. **Voraussetzungen**
   - Node.js (v12 oder höher)
   - npm oder Yarn

2. **Installation**
   ```bash
   git clone <repository-url>
   cd kleidungsdonations-website
   npm install
   ```

3. **Entwicklung starten**
   ```bash
   npm run dev
   ```

## Projektstruktur

- **Vite Konfiguration (`vite.config.ts`)**: Verwendet das React-Plugin von Vite für moderne Funktionen und einen optimierten Entwicklungs-Workflow.

- **HTML Hauptstruktur (`index.html`)**: Umfasst das allgemeine Skelett der App mit einem Mounting-Point `<div id="root"></div>`.

- **React-Komponenten**: Die Hauptanwendungskomponente ist in `App.tsx` enthalten, ergänzt durch spezialisierte Komponenten für interaktive Elemente.

## Konfigurationen

### ESLint Konfiguration (`eslint.config.js`)

- Importiert empfohlene JavaScript- und TypeScript-Konfigurationen.
- Nutzt Plugins für React-Hooks und React-Refresh.
- Definiert spezifische Linting-Regeln und ignoriert das `dist`-Verzeichnis.

### TypeScript Konfigurationen

- **App-Konfiguration (`tsconfig.app.json`)**: Setzt ES2020 als Zielumgebung und verwendet strikte Linting-Optionen.
- **Allgemeine Konfiguration (`tsconfig.json`)**: Enthält Projektreferenzen und grundlegende TypeScript-Einstellungen.
- **Node-Konfiguration (`tsconfig.node.json`)**: Optimiert für Node.js mit Unterstützung moderner JavaScript-Features.

## Komponentenübersicht

### 1. FormScreen: Spendenregistrierung

Ermöglicht die Erfassung von Kleiderspenden mit Optionen zur Auswahl zwischen Übergabe oder Abholung. Validiert Eingaben und übermittelt Daten an den zentralen Kontext.

### 2. HomeScreen: Startseite

Begrüßt Nutzer, erläutert den Plattformzweck und bietet Zugang zur Spendenregistrierung.

### 3. ImpressumScreen: Impressum

Zeigt gesetzlich erforderliche Informationen gemäß § 5 TMG an.

### 4. PrivacyScreen: Datenschutzerklärung

Erklärt die Datenschutzpraktiken der Plattform hinsichtlich Datenerfassung und Benutzerrechte.

### 5. RegistrationScreen: Spenden Bestätigung

Bestätigt den Erhalt einer Spende und listet die registrierten Informationen zur Überprüfung und Speicherung.

## Datenfluss und Zustandsverwaltung

Die Anwendung nutzt React-Hooks wie `useState` für lokale Eingaben und einen benutzerdefinierten Kontext zur globalen Zustandsverwaltung, unterstützt durch `useHandover`.

## Routing

Mithilfe des React Routers werden Seiten der Anwendung über verschiedene Routen zugänglich gemacht, die eine nahtlose Navigation bieten.

## Stile und CSS

Bootstrap wird für konsistente Oberflächenelemente eingesetzt, ergänzt durch benutzerdefinierte CSS-Regeln für spezifische Anpassungen. Die Stile sind in modularen CSS-Dateien organisiert, um die Wartbarkeit zu verbessern.

## Zusammenfassung

Diese Dokumentation bietet einen umfassenden Überblick über die Architektur und Funktionsweise der Kleidungsdonations-Website. Die sorgfältige Strukturierung der Komponenten und die strikte Typisierung mit TypeScript erleichtern die Wartung und Erweiterung der Anwendung. Die Kombination aus React, Vite, und modernen Entwicklungstools bietet eine exzellente Grundlage für eine effiziente Weiterentwicklung und Betrieb der Plattform.

Für weitergehende Entwicklungen wird empfohlen, den Quellcode eingehend zu prüfen und die Funktionalität durch direkte Nutzung der Anwendung zu validieren.