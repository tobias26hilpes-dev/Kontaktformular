getDataFromLocalStorage();

function getDataFromLocalStorage() {
    const output = document.querySelector("#storage-output");
    const data = JSON.parse(localStorage.getItem("formData"));

    if (!data) {
        output.innerHTML = `
            <h2>Gespeicherte Formulardaten</h2>
            <p>Keine Daten vorhanden.</p>
        `;
        return;
    }

    output.innerHTML = `
        <h2>Gespeicherte Formulardaten</h2>
        <p><strong>Vorname:</strong> ${data.firstname ?? ""}</p>
        <p><strong>Nachname:</strong> ${data.lastname ?? ""}</p>
        <p><strong>Email:</strong> ${data.email ?? ""}</p>
        <p><strong>Telefonnummer:</strong> ${data.phonenumber ?? ""}</p>
        <p><strong>Geburtsdatum:</strong> ${data.date ?? ""}</p>
    `;
}

function deletelocalStorage() {
    localStorage.removeItem("formData");
    getDataFromLocalStorage();
}

window.deletelocalStorage = deletelocalStorage;
