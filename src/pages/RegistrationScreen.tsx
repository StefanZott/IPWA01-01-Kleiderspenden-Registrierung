import { useEffect, useRef } from "react";
import { useHandover } from "../context/FormContext";

function RegistrationScreen() {
    const hasRun = useRef(false);
    const { data } = useHandover();

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;
        
        let id = localStorage.length + 1

        const jsonData = JSON.stringify(data);
        localStorage.setItem(id.toString(), jsonData);
    })

    return (
        <div className="container mt-4">
            <h2>Registrierungsdaten</h2>
            <ul className="list-group">
                <li className="list-group-item"><strong>Aktion:</strong> {data.action}</li>
                <li className="list-group-item"><strong>Vorname:</strong> {data.firstname}</li>
                <li className="list-group-item"><strong>Nachname:</strong> {data.lastname}</li>
                <li className="list-group-item"><strong>Email:</strong> {data.email}</li>
                <li className="list-group-item"><strong>Adresse:</strong> {data.address}</li>
                <li className="list-group-item"><strong>Stadt:</strong> {data.city}</li>
                <li className="list-group-item"><strong>PLZ:</strong> {data.zip}</li>
                <li className="list-group-item"><strong>Kleidung:</strong> {data.artOfCloth}</li>
                <li className="list-group-item"><strong>Krisengebiet:</strong> {data.crisisArea}</li>
                <li className="list-group-item"><strong>Datum:</strong> {data.date}</li>
                <li className="list-group-item"><strong>Uhrzeit:</strong> {data.time}</li>
            </ul>
        </div>
    );
}

export default RegistrationScreen;