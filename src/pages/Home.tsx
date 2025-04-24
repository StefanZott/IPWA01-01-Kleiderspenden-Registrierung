import { ChangeEvent, MouseEvent, useState } from "react";
import "leaflet/dist/leaflet.css";
import WorldMap from "../components/WorldMap";
import { useHandover } from '../context/FormContext';
import { useNavigate } from "react-router-dom";

function Home() {
    const [checkBoxOffice, setCheckBoxOffice] = useState<1 | null>(null);
    const [checkBoxVehicle, setCheckBoxVehicle] = useState<2 | null>(null);
    const [mainZip] = useState<string>("74592")
    const { updateData } = useHandover();
    const navigate = useNavigate();

    const handleCheckboxChange = (boxNumber: 1 | 2 | null, id: string) => {
        console.log("boxNumber: " + boxNumber)
        if (boxNumber === 1) {
            if (checkBoxOffice === 1) {
                setCheckBoxOffice(null)
                setCheckBoxVehicle(null)
            } else if (checkBoxOffice === null) {
                setCheckBoxOffice(1)
                setCheckBoxVehicle(null)
            }
        } else if (boxNumber === 2) {
            if (checkBoxVehicle === 2) {
                setCheckBoxOffice(null)
                setCheckBoxVehicle(null)
            } else if (checkBoxVehicle === null) {
                setCheckBoxOffice(null)
                setCheckBoxVehicle(2)
            }
        }

        if (id === "defaultCheck1") {
            updateData({"action": "handoverAtTheOffice"})
        } else if (id === "defaultCheck2") {
            updateData({"action": "RequestACollectionVehicle"})
        }
    }

    const checkZip = (zip: string) => {
        console.log(zip)
        const prefix1 = mainZip.slice(0, 2);
        const prefix2 = zip.slice(0, 2);

        console.log(prefix1)
        console.log(prefix2)
        if (prefix1 !== prefix2) {
            document.getElementById("zip")?.classList.remove("border-success")
            document.getElementById("zip")?.classList.add("border-danger")
        } else {
            document.getElementById("zip")?.classList.remove("border-danger")
            document.getElementById("zip")?.classList.add("border-success")
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.type)
        if (event.target.value.length > 3) {
            document.getElementById(event.target.id)?.classList.remove("border-danger")
            document.getElementById(event.target.id)?.classList.add("border-success")
        } else {
            document.getElementById(event.target.id)?.classList.remove("border-success")
            document.getElementById(event.target.id)?.classList.add("border-danger")
        }
    }

    const submitHandler = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.preventDefault();

        for (let index = 0; index < event.target.form.length; index++) {
            const element = event.target.form[index];
            
            console.log(element.id)
            console.log(element.value)
            console.log("")
            if (element.value !== "") {
                updateData({[element.id]: element.value})
            }
        }

        navigate("/registration")
    }

return (
  <>
    <form className="row g-3">
        <div className="form-check p-0">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={checkBoxOffice === 1} onChange={(event) => handleCheckboxChange(1, event.target.id)} />
            <label className="form-check-label" htmlFor="defaultCheck1">
                Übergabe an der Geschäftsstelle
            </label>
        </div>
        <div id="handoverAtTheOffice" className="form-check" hidden={checkBoxOffice === null}>
            <div className="col-12">
                <label htmlFor="artOfCloth" className="form-label">Art der Kleidung</label>
                <input type="text" className="form-control" id="artOfCloth" onChange={(event) => changeHandler(event)}/>
            </div>
            <div className="col-12">
                <label htmlFor="crisisArea" className="form-label">Krisengebiet</label>
                <WorldMap />
            </div>
        </div>
        <div className="form-check p-0">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked={checkBoxVehicle === 2} onChange={(event) => handleCheckboxChange(2, event.target.id)} />
            <label className="form-check-label" htmlFor="defaultCheck2">
                Abholung 
            </label>
        </div>
        <div id="RequestACollectionVehicle" className="form-check" hidden={checkBoxVehicle === null}>
            <div className="col-12">
                <label htmlFor="firstname" className="form-label">Vorname</label>
                <input type="text" className="form-control" id="firstname" onChange={(event) => changeHandler(event)}/>
            </div>
            <div className="col-12">
                <label htmlFor="lastname" className="form-label">Nachname</label>
                <input type="text" className="form-control" id="lastname" onChange={(event) => changeHandler(event)}/>
            </div>
            <div className="col-12">
                <label htmlFor="email" className="form-label">E-Mail</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-12">
                <label htmlFor="address" className="form-label">Adresse</label>
                <input type="text" className="form-control" id="address" onChange={(event) => changeHandler(event)}/>
            </div>
            <div className="col-12">
                <label htmlFor="city" className="form-label">Stadt</label>
                <input type="text" className="form-control" id="city" onChange={(event) => changeHandler(event)}/>
            </div>
            <div className="col-12">
                <label htmlFor="zip" className="form-label">PLZ</label>
                <input type="text" className="form-control" id="zip" onChange={(event) => checkZip(event.target.value)} />
            </div>
            <div className="col-12">
                <label htmlFor="artOfCloth" className="form-label">Art der Kleidung</label>
                <input type="text" className="form-control" id="artOfCloth" onChange={(event) => changeHandler(event)}/>
            </div>
            <div className="col-12">
                <label htmlFor="crisisArea" className="form-label">Krisengebiet</label>
                <WorldMap />
            </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary w-100" disabled={checkBoxOffice === null && checkBoxVehicle === null} onClick={(event) => submitHandler(event)}>Registrieren</button>
        </div>
    </form>
  </>
)
}

export default Home