let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let calculateButton = document.getElementById('calculate');
let imcResult = document.getElementById('imc-result');

calculateButton.addEventListener('click', function() {
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        imcResult.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    let heightInMeters = height / 100;
    let imc = weight / (heightInMeters * heightInMeters);
    imcResult.textContent = imc.toFixed(2);
});