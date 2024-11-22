const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;


let temperature = 9;  // Celcius
let windSpeed = 5;   // km/h
//let unit = "metric"; // unit

function calculateWindChill(temperature, windSpeed) {
    // Metric system
    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return parseFloat(windChill.toFixed(2)); //
    }

    /*
    // Imperial System
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return parseFloat(windChill.toFixed(2));
    }
    */

    // Returns N/A when requirments are not met (like metric or imperial)
    return "N/A";
}

let windChill = calculateWindChill(temperature, windSpeed);

document.getElementById("windchill").textContent = windChill;