import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 min-vh-100 text-center p-4">
      <h1 className="mb-4" style={{ maxWidth: "800px" }}>
        Gemeinsam Hoffnung schenken – Willkommen auf unserer Hilfsplattform
      </h1>
      <p className="lead" style={{ maxWidth: "800px" }}>
        Jeden Tag erreichen uns Hilferufe aus Krisenregionen, in denen Menschen dringend auf Unterstützung angewiesen sind.<br /><br />
        Ob durch Naturkatastrophen, Konflikte oder andere Notlagen – oft fehlt es dort an den grundlegendsten Dingen: Kleidung, Schutz, Würde.<br /><br />
        Mit deiner Hilfe können wir das ändern.<br /><br />
        Diese Plattform ist deine Möglichkeit, schnell und unkompliziert zu helfen.<br />
        Wähle, ob du deine Kleidung selbst zu uns bringen möchtest oder ob wir sie bei dir abholen sollen.<br /><br />
        Jedes Teil zählt. Jeder Beitrag macht einen Unterschied.<br /><br />
        <strong>Danke, dass du da bist. Danke, dass du hilfst.</strong>
      </p>
      
      <Link to="/form" className="btn btn-primary mt-4">
        Jetzt Kleidung spenden
      </Link>
    </div>
  );
}

export default Home;
