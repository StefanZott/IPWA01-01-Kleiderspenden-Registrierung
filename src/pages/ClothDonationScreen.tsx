import { useEffect, useState } from "react";
import { ClothDonation } from "../lib/Types";
import '../css/ClothDonationScreen.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ClothDonationScreen() {
    const [clothDonations, setClothDonations] = useState<{ key: string, data: ClothDonation }[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState<keyof ClothDonation>("firstname");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [editKey, setEditKey] = useState<string | null>(null);
    const [editedData, setEditedData] = useState<Partial<ClothDonation>>({});

    useEffect(() => {
        const allClothDonations: { key: string, data: ClothDonation }[] = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                const item = localStorage.getItem(key);
                if (item) {
                    try {
                        const parsed = JSON.parse(item);
                        // Sicherstellen, dass es die richtigen Felder hat
                        if (parsed.firstname && parsed.lastname) {
                            allClothDonations.push({ key, data: parsed });
                        }
                    } catch (error) {
                        console.error("Fehler beim Parsen von localStorage Item:", key, error);
                    }
                }
            }
        }

        setClothDonations(allClothDonations);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    const handleResetSearch = () => setSearchTerm("");

    const handleSort = (field: keyof ClothDonation) => {
        setSortField(field);
        setSortDirection(prev => (field === sortField && prev === "asc") ? "desc" : "asc");
    };

    const handleDelete = (key: string) => {
        if (window.confirm("Bist du sicher, dass du diesen Eintrag löschen möchtest?")) {
            localStorage.removeItem(key);
            setClothDonations(prev => prev.filter(d => d.key !== key));
        }
    };

    const handleEdit = (key: string, data: ClothDonation) => {
        setEditKey(key);
        setEditedData(data);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ClothDonation) => {
        setEditedData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSave = (key: string) => {
        if (!editedData) return;
        localStorage.setItem(key, JSON.stringify(editedData));
        setClothDonations(prev => prev.map(d => d.key === key ? { key, data: editedData as ClothDonation } : d));
        setEditKey(null);
        setEditedData({});
    };

    const handleCancel = () => {
        setEditKey(null);
        setEditedData({});
    };

    const renderSortArrow = (field: keyof ClothDonation) => {
        if (sortField !== field) return null;
        return (
            <i className={`bi bi-caret-${sortDirection === "asc" ? "up" : "down"}-fill ms-1`} style={{ fontSize: "0.8rem" }}></i>
        );
    };

    const filteredDonations = clothDonations.filter(({ data }) =>
        Object.values(data).some(value =>
            typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedDonations = [...filteredDonations].sort((a, b) => {
        const aField = a.data[sortField] ?? "";
        const bField = b.data[sortField] ?? "";
        return sortDirection === "asc" 
            ? (aField > bField ? 1 : -1) 
            : (aField < bField ? 1 : -1);
    });

    return (
        <div className="container mt-4">
            <h2>Deine Registrierungsdaten</h2>

            <div className="mb-3 d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Suchen nach Name, Stadt, etc."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="btn btn-secondary" onClick={handleResetSearch}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th onClick={() => handleSort("firstname")}>Vorname {renderSortArrow("firstname")}</th>
                        <th onClick={() => handleSort("lastname")}>Nachname {renderSortArrow("lastname")}</th>
                        <th onClick={() => handleSort("email")}>E-Mail {renderSortArrow("email")}</th>
                        <th onClick={() => handleSort("address")}>Adresse {renderSortArrow("address")}</th>
                        <th onClick={() => handleSort("city")}>Stadt {renderSortArrow("city")}</th>
                        <th onClick={() => handleSort("zip")}>PLZ {renderSortArrow("zip")}</th>
                        <th onClick={() => handleSort("artOfCloth")}>Art der Kleidung {renderSortArrow("artOfCloth")}</th>
                        <th onClick={() => handleSort("crisisArea")}>Krisengebiet {renderSortArrow("crisisArea")}</th>
                        <th onClick={() => handleSort("date")}>Datum {renderSortArrow("date")}</th>
                        <th onClick={() => handleSort("time")}>Uhrzeit {renderSortArrow("time")}</th>
                        <th>Aktion</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedDonations.length === 0 ? (
                        <tr>
                            <td colSpan={11} className="text-center">Keine Einträge gefunden.</td>
                        </tr>
                    ) : (
                        sortedDonations.map(({ key, data }) => (
                            <tr key={key}>
                                {editKey === key ? (
                                    <>
                                        {Object.keys(data).map((field) => (
                                            <td key={field}>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={(editedData as any)[field] || ""}
                                                    onChange={(e) => handleChange(e, field as keyof ClothDonation)}
                                                />
                                            </td>
                                        ))}
                                        <td>
                                            <button className="btn btn-success btn-sm me-2" onClick={() => handleSave(key)}>
                                                <i className="bi bi-save"></i>
                                            </button>
                                            <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{data.firstname}</td>
                                        <td>{data.lastname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address}</td>
                                        <td>{data.city}</td>
                                        <td>{data.zip}</td>
                                        <td>{data.artOfCloth}</td>
                                        <td>{data.crisisArea}</td>
                                        <td>{data.date}</td>
                                        <td>{data.time}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(key, data)}>
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(key)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ClothDonationScreen;
