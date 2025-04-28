import { ChangeEvent, MouseEvent, useState } from "react";
import "leaflet/dist/leaflet.css";
import WorldMap from "../components/WorldMap";
import { useHandover } from '../context/FormContext';
import { useNavigate } from "react-router-dom";

function FormScreen() {
  const [checkBoxOffice, setCheckBoxOffice] = useState<1 | null>(null);
  const [checkBoxVehicle, setCheckBoxVehicle] = useState<2 | null>(null);
  const [mainZip] = useState<string>("74592");
  const { updateData } = useHandover();
  const navigate = useNavigate();

  const handleCheckboxChange = (boxNumber: 1 | 2 | null, id: string) => {
    if (boxNumber === 1) {
      if (checkBoxOffice === 1) {
        setCheckBoxOffice(null);
      } else {
        setCheckBoxOffice(1);
        setCheckBoxVehicle(null);
      }
    } else if (boxNumber === 2) {
      if (checkBoxVehicle === 2) {
        setCheckBoxVehicle(null);
      } else {
        setCheckBoxOffice(null);
        setCheckBoxVehicle(2);
      }
    }

    if (id === "defaultCheck1") {
      updateData({ "action": "handoverAtTheOffice" });
    } else if (id === "defaultCheck2") {
      updateData({ "action": "RequestACollectionVehicle" });
    }
  };

  const checkZip = (zip: string) => {
    const prefix1 = mainZip.slice(0, 2);
    const prefix2 = zip.slice(0, 2);

    const zipField = document.getElementById("zip");
    if (!zipField) return;

    if (prefix1 !== prefix2) {
      zipField.classList.remove("border-success");
      zipField.classList.add("border-danger");
    } else {
      zipField.classList.remove("border-danger");
      zipField.classList.add("border-success");
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const field = document.getElementById(event.target.id);
    if (!field) return;

    if (event.target.value.length >= 3) {
      field.classList.remove("border-danger");
      field.classList.add("border-success");
    } else {
      field.classList.remove("border-success");
      field.classList.add("border-danger");
    }
  };

  const submitHandler = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();

    const formElements = event.currentTarget.form;
    if (!formElements) return;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement;
      if (element.value !== "") {
        updateData({ [element.id]: element.value });
      }
    }

    const now = new Date();
    updateData({ "date": now.toLocaleDateString("de-DE") });
    updateData({ "time": now.toLocaleTimeString("de-DE") });

    navigate("/registration");
  };

  return (
    <div className="container my-5 p-4 rounded" style={{ backgroundColor: '#FFF3E0', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 className="text-center mb-4" style={{ color: '#FF6F00' }}>Kleiderspende registrieren</h2>
      <form className="row g-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="defaultCheck1" checked={checkBoxOffice === 1} onChange={(event) => handleCheckboxChange(1, event.target.id)} />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Übergabe an der Geschäftsstelle
          </label>
        </div>

        {checkBoxOffice !== null && (
          <div className="p-3 bg-white rounded">
            <div className="mb-3">
              <label htmlFor="artOfCloth" className="form-label">Art der Kleidung</label>
              <input type="text" className="form-control" id="artOfCloth" onChange={changeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="crisisArea" className="form-label">Krisengebiet</label>
              <WorldMap />
            </div>
          </div>
        )}

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="defaultCheck2" checked={checkBoxVehicle === 2} onChange={(event) => handleCheckboxChange(2, event.target.id)} />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Abholung anfordern
          </label>
        </div>

        {checkBoxVehicle !== null && (
          <div className="p-3 bg-white rounded">
            {[
              { id: 'firstname', label: 'Vorname' },
              { id: 'lastname', label: 'Nachname' },
              { id: 'email', label: 'E-Mail', type: 'email' },
              { id: 'address', label: 'Adresse' },
              { id: 'city', label: 'Stadt' },
              { id: 'zip', label: 'PLZ' },
              { id: 'artOfCloth', label: 'Art der Kleidung' }
            ].map(({ id, label, type = 'text' }) => (
              <div className="mb-3" key={id}>
                <label htmlFor={id} className="form-label">{label}</label>
                <input type={type} className="form-control" id={id} onChange={id === 'zip' ? (e) => checkZip(e.target.value) : changeHandler} />
              </div>
            ))}
            <div className="mb-3">
              <label htmlFor="crisisArea" className="form-label">Krisengebiet</label>
              <WorldMap />
            </div>
          </div>
        )}

        <div className="col-12">
          <button
            type="submit"
            className="btn w-100"
            disabled={checkBoxOffice === null && checkBoxVehicle === null}
            style={{ backgroundColor: '#FF6F00', borderColor: '#FF6F00', color: 'white' }}
            onClick={submitHandler}
          >
            Registrieren
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormScreen;
