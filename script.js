function appendToOutput(degree, kelvin) {
    const output = document.getElementById('output');
    output.innerHTML = degree + " degrees " + kelvin + " kelvin";
}

function converter() {
    // We need to grab the value from the input
    const input = document.getElementById('input');
    const fahrenheit = input.value;
    const degree = parseInt(fahrenheit) - 32;
    const kelvin = parseInt(fahrenheit) + 459;
    appendToOutput(degree, kelvin);
}

const button = document.getElementById('button');
button.onclick = converter;