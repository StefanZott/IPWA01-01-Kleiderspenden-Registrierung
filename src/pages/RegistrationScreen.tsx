import { useEffect, useRef, useState } from "react";
import { useHandover } from "../context/FormContext";
import { ClothDonation } from "../lib/Types";

function RegistrationScreen() {
  const hasRun = useRef(false);
  const { data, updateData } = useHandover();
  const [currentDonation, setCurrentDonation] = useState<ClothDonation>()

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let id = localStorage.length + 1;
    const jsonData = JSON.stringify(data);
    localStorage.setItem(id.toString(), jsonData);

    setCurrentDonation(data)

    // Jetzt Daten leeren
    updateData({
      action: '',
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      artOfCloth: '',
      crisisArea: '',
      date: '',
      time: '',
    });
  }, [data, updateData]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Vielen Dank für Ihre Spende!</h2>
      <p className="lead">Ihre Registrierung war erfolgreich. Hier sind Ihre Angaben:</p>

      <ul className="list-group">
        <li className="list-group-item"><strong>Art der Kleidung:</strong> {currentDonation?.artOfCloth}</li>
        <li className="list-group-item"><strong>Krisengebiet:</strong> {currentDonation?.crisisArea}</li>
        <li className="list-group-item"><strong>Datum:</strong> {currentDonation?.date}</li>
        <li className="list-group-item"><strong>Uhrzeit:</strong> {currentDonation?.time}</li>
        <li className="list-group-item"><strong>Vorname:</strong> {currentDonation?.firstname}</li>
        <li className="list-group-item"><strong>Nachname:</strong> {currentDonation?.lastname}</li>
        <li className="list-group-item"><strong>Email:</strong> {currentDonation?.email}</li>
        <li className="list-group-item"><strong>Adresse:</strong> {currentDonation?.address}</li>
        <li className="list-group-item"><strong>Stadt:</strong> {currentDonation?.city}</li>
        <li className="list-group-item"><strong>Postleitzahl:</strong> {currentDonation?.zip}</li>
      </ul>

      <div className="alert alert-success mt-4" role="alert">
        Wir freuen uns über Ihre Unterstützung. Gemeinsam helfen wir Menschen in Not!
      </div>
    </div>
  );
}

export default RegistrationScreen;

