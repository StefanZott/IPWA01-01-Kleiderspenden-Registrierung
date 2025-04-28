function Impressum() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Impressum</h1>
      
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>
          Hoffnungsfaden GmbH<br />
          Vertreten durch: Max Mustermann<br />
          Musterstraße 12<br />
          12345 Berlin<br />
          Deutschland
        </p>

        <p><strong>Kontakt:</strong><br />
          Telefon: +49 (0)30 12345678<br />
          E-Mail: kontakt@hoffnungsfaden.de<br />
          Website: www.Hoffnungsfaden.de
        </p>

        <p><strong>Vereinsregister:</strong><br />
          Eingetragen im Vereinsregister beim Amtsgericht Berlin<br />
          Registernummer: VR 12345 B
        </p>

        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
          Max Mustermann<br />
          Musterstraße 12<br />
          12345 Berlin
        </p>

        <p><strong>Haftungsausschluss:</strong><br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <p><strong>Urheberrecht:</strong><br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. 
          Beiträge Dritter sind als solche gekennzeichnet.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
