document.getElementById('indigenous').addEventListener('change', function(event) {
    const nationalityField = document.getElementById('nationalityField');
    if (event.target.checked) {
        nationalityField.style.display = 'block';
    } else {
        nationalityField.style.display = 'none';
    }
});

document.getElementById('applicantForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    // Convert indigenous checkbox value to boolean
    formObject.indigenous = formObject.indigenous === 'on';

    const jsonResult = JSON.stringify(formObject, null, 2);

    document.getElementById('result').textContent = jsonResult;
});
