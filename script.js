$(document).ready(function () {

    $("input[type='button']").click(function(){

        var tempInput = document.getElementById("input").value;

        let radioValue = $("input[name='tempUnit']:checked").val();

        if(radioValue === "fahrenheit"){
            document.getElementById("tempUnit1").textContent="Celcius";
            document.getElementById("tempUnit2").textContent="Kelvin";

            let outputCelcius = fahrenheitToCelcius(tempInput);
            let outputKelvin = fahrenheitToKelvin(tempInput);

            document.getElementById("output1").innerHTML = outputCelcius.toFixed(2);
            document.getElementById("output2").innerHTML = outputKelvin.toFixed(2);


        } else if (radioValue === "celcius") {
            document.getElementById("tempUnit1").textContent="Fahrenheit";
            document.getElementById("tempUnit2").textContent="Kelvin";

            let outputFahrenheit = celciusToFahrenheit(tempInput);
            let outputKelvin = celciusToKelvin(tempInput);

            document.getElementById("output1").innerHTML = outputFahrenheit.toFixed(2);
            document.getElementById("output2").innerHTML = outputKelvin.toFixed(2);

        } else {
            document.getElementById("tempUnit1").textContent="Fahrenheit";
            document.getElementById("tempUnit2").textContent="Celcius";

            let outputFahrenheit = kelvinToFahrenheit(tempInput);
            let outputCelcius = kelvinToCelsius(tempInput);

            document.getElementById("output1").innerHTML = outputFahrenheit.toFixed(2);
            document.getElementById("output2").innerHTML = outputCelcius.toFixed(2);
        }
    });


    const fahrenheitToCelcius = function(tempInput) {
        return (parseInt(tempInput) - 32) * (5/9);
    }

    const fahrenheitToKelvin = function(tempInput) {
        return (parseInt(tempInput) + 459.67) * (5/9);
    }

    const celciusToFahrenheit = function(tempInput) {
        return (parseInt(tempInput) * 9/5)+ 32;
    }

    const celciusToKelvin = function(tempInput) {
        return parseInt(tempInput) + 273.15;
    }

    const kelvinToFahrenheit = function(tempInput) {
        return (parseInt(tempInput) * 9/5) - 459.67;
    }

    const kelvinToCelsius = function(tempInput) {
        return parseInt(tempInput) - 273.15;
    }


});