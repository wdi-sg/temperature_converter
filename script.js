console.log("hello script js");


const choices = ["Fahrenheit", "Celsius", "Kelvin"];

function fahrenheitBox(){
  user.currentChoice = choices[0];
}
function celciusBox(){
  user.currentChoice = choices[1];
}
function kelvinBox(){
  user.currentChoice = choices[2];
}

document.getElementById('Fahrenheit').addEventListener('checked', fahrenheitBox);
document.getElementById('Celsius').addEventListener('checked', celciusBox);
document.getElementById('Kelvin').addEventListener('checked', kelvinBox);


function finalResult(){
    if(user.currentChoice = choices[0]){
        var inputHappened = function(currentInput){
        var fahrenheitResult = parseInt(currentInput);
            var fahrenheitToCelsius = (fahrenheitResult - 32) * (5/9);
            var celsiusResult = fahrenheitToCelsius.toFixed(2);
            var fahrenheitToKelvin =(fahrenheitResult - 32) * (5/9) + 273.15;
            var kelvinResult = fahrenheitToKelvin.toFixed(2);
        displayResult("This is equal to " + celsiusResult + " Degrees Celsius or " + kelvinResult + " Kelvin.");
    }
    else if(user.currentChoice = choices[1]){
            var inputHappened = function(currentInput){
                    var celciusResult = parseInt(currentInput);
                        var celciusToFahrenheit = (celciusResult × (9/5)) + 32;
                        var fahrenheitResult = celciusToFahrenheit.toFixed(2);
                        var celciusToKelvin = celciusResult + 273.15;
                        var kelvinResult = celciusToKelvin.toFixed(2);
                displayResult("This is equal to Fahrenheit " + fahrenheitResult + " or " + kelvinResult + " Kelvin.");
            }
        }
    else if(user.currentChoice = choices[2]){
            var inputHappened = function(currentInput){
                    var kelvinResult = parseInt(currentInput);
                        var kelvinToFahrenheit = ((kelvinResult − 273.15) × (9/5)) + 32;
                        var fahrenheitResult = kelvinToFahrenheit.toFixed(2);
                        var kelvinToCelcius = kelvinResult - 273.15;
                        var celciusResult = kelvinToCelcius.toFixed(2);
                displayResult("This is equal to Fahrenheit " + fahrenheitResult + " or " + celciusResult + " Degrees Celsius.");
            }
        }
    }
    function displayResult(result){
    const resultText = document.querySelector('#output');
    resultText.innerText = result;
    }
}