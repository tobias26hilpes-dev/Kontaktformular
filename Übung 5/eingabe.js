const submitBtn = document.querySelector("#submitBtn");

function onSubmitGetFormData(event) {
    event.preventDefault();

    const formElement = document.querySelector("#nameForm");
    const formData = new FormData(formElement);
    const formDataObject = {};

    for (const [key, value] of formData) {
        formDataObject[key] = value;
    }

    localStorage.setItem("formData", JSON.stringify(formDataObject));
}

submitBtn.addEventListener("click", onSubmitGetFormData);




