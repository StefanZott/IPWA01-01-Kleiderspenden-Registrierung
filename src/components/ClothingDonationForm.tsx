import { useState } from "react";
import "leaflet/dist/leaflet.css";
import WorldMap from "./WorldMap";

function ClothingDonationForm() {
    const [checkBoxOffice, setCheckBoxOffice] = useState<1 | 2 | null>(null);
    const [checkBoxVehicle, setCheckBoxVehicle] = useState<1 | 2 | null>(null);

    const handleCheckboxChange = (boxNumber: 1 | 2) => {
        console.log("boxNumber: " + boxNumber)
        if (boxNumber === 1) {
            setCheckBoxOffice(1)
            setCheckBoxVehicle(null)
        } else if (boxNumber === 2) {
            setCheckBoxVehicle(2)
            setCheckBoxOffice(null)
        }
        
    }

return (
  <>
    <form className="row g-3">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={checkBoxOffice === 1} onChange={() => handleCheckboxChange(1)} />
            <label className="form-check-label" htmlFor="defaultCheck1">
                Übergabe an der Geschäftsstelle
            </label>
        </div>
        <div id="handoverAtTheOffice" className="form-check" hidden={checkBoxOffice === null}>
            <div className="col-12">
                <select className="form-select" aria-label="Default select example">
                    <option value="1">Pulover</option>
                    <option value="2">Hose</option>
                    <option value="3">T-Shirt</option>
                    <option value="4">kurze Hose</option>
                </select>
            </div>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked={checkBoxVehicle === 2} onChange={() => handleCheckboxChange(2)} />
            <label className="form-check-label" htmlFor="defaultCheck2">
                Abholung 
            </label>
        </div>
        <div id="RequestACollectionVehicle " className="form-check" hidden={checkBoxVehicle === null}>
            <div className="col-12">
                <label htmlFor="firstname" className="form-label">Vorname</label>
                <input type="email" className="form-control" id="firstname" />
            </div>
            <div className="col-12">
                <label htmlFor="lastname" className="form-label">Nachname</label>
                <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="col-12">
                <label htmlFor="email" className="form-label">E-Mail</label>
                <input type="text" className="form-control" id="email" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
                <label htmlFor="address" className="form-label">Adresse</label>
                <input type="text" className="form-control" id="address" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-12">
                <label htmlFor="city" className="form-label">Stadt</label>
                <input type="text" className="form-control" id="city" />
            </div>
            <div className="col-12">
                <label htmlFor="zip" className="form-label">PLZ</label>
                <input type="text" className="form-control" id="zip" />
            </div>
            <div className="col-12">
                <label htmlFor="artOfCloth" className="form-label">Art der Kleidung</label>
                <select className="form-select" aria-label="Default select example" id="artOfCloth">
                    <option value="1">Pulover</option>
                    <option value="2">Hose</option>
                    <option value="3">T-Shirt</option>
                    <option value="4">kurze Hose</option>
                </select>
            </div>
            <div className="col-12">
                <label htmlFor="crisisArea" className="form-label">Krisengebiet</label>
                <WorldMap />
            </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Registrieren</button>
        </div>
    </form>
  </>
)
}

export default ClothingDonationForm