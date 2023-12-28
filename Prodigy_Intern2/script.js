document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultOutput = document.getElementById("result");

    convertButton.addEventListener("click", convertTemperature);

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let result = "";

        if (isNaN(temperature)) {
            result = "Please enter a valid number.";
        } else {
            if (unit === "celsius") {
                const fahrenheit = (temperature * 9/5) + 32;
                const kelvin = temperature + 273.15;
                result = `${temperature}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K.`;
            } else if (unit === "fahrenheit") {
                const celsius = (temperature - 32) * 5/9;
                const kelvin = (temperature - 32) * 5/9 + 273.15;
                result = `${temperature}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K.`;
            } else if (unit === "kelvin") {
                const celsius = temperature - 273.15;
                const fahrenheit = (temperature - 273.15) * 9/5 + 32;
                result = `${temperature}K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F.`;
            }
        }

        resultOutput.textContent = result;
    }
});
