function convertToCelsius (tempF) {
    let value = (tempF - 32) * 0.556;
    console.log(Number(value.toFixed(2)));
}

function convertToFarenheit (tempC) {
    let value = (tempC* 1.8)+32;
    console.log(Number(value.toFixed(2)));
}

convertToCelsius(78);
convertToFarenheit(36);