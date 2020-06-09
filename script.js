console.log("hello script js");
const btn = document.querySelector('#btn');
        // handle click button

btn.onclick = function () {
            console.log('hello');
            var rbs = document.querySelectorAll('input[name="unit"]');
            var name = document.getElementById("yourname").value;
            let selectedValue;
            var input = document.getElementById("input").value;
            var output;
            var adviceText = `Wear a smile, ${name}!`;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    if (rb.value == "fahrenheit") {
                        output = convertFahrenheit(input);
                        if (input < 32 ) {
                            adviceText = `${name}, wear a coat!`;
                        } else if (input > 104){
                            adviceText = `${name}, dress for the heat!`;
                        } else if (input >212){
                            adviceText = `${name}, beware of heatstroke!`;
                        } else {
                            adviceText;
                        }
                    } else if (rb.value == "celsius"){
                        output = convertCelsius(input);
                        if (input < 0 ) {
                            adviceText = `${name}, wear a coat!`;
                        } else if (input > 40){
                            adviceText = `${name}, dress for the heat!`;
                        } else if (input > 100){
                           adviceText = `${name}, beware of heatstroke!`;
                        } else {
                            adviceText;
                        }
                    } else if (rb.value == "kelvin"){
                        output = convertKelvin(input);
                        if (input < 273.15 ) {
                            adviceText = `${name}, wear a coat!`;
                        } else if (input > 313.5){
                            adviceText = `${name}, dress for the heat!`;
                        } else if (input > 373.15){
                            adviceText = `${name}, beware of heatstroke!`;
                        } else {
                            adviceText;
                        }
                    }
                }
            }
            display(output);
            displayAdvice(adviceText);
        };

function convertFahrenheit (currentInput) {
  console.log( currentInput );
  var outputC = (currentInput - 32) * 5/9;
  var outputK = (currentInput - 32) * 5/9 + 273.15;
  var totalOutput = currentInput + " F is " + outputC + " C which is " + outputK + " K.";
  if (outputC < 0) {
   totalOutput += " ooh it's cold out!";
} else if (outputC > 40) {
    totalOutput += " ooh it's hot out!";
} else if (outputC > 100) {
 totalOutput += " ooh it's boiling!";
} else {
    var totalOutput;
}
  return totalOutput ;
}


function convertCelsius (currentInput) {
  console.log( currentInput );
  var outputF = (currentInput * 9/5) + 32;
  var outputK = parseInt(currentInput) + 273.15;
  var totalOutput = currentInput + " C is " + outputF + "  F which is " + outputK + " K.";
  if (outputK < 273.15) {
   totalOutput += " ooh it's cold out!";
} else if (outputK > 313.15) {
    totalOutput += " ooh it's hot out!";
} else if (outputK > 373.15) {
 totalOutput += " ooh it's boiling!";
} else {
    var totalOutput;
}
  return totalOutput ;
};


function convertKelvin (currentInput) {
  console.log( currentInput );
  var outputC = currentInput - 273.15;
  var outputF = (currentInput - 273.15) * 9/5 + 32;
  var totalOutput = currentInput + " K is " + outputC + " C which is " + outputF + "  F.";
  if (outputC < 0) {
   totalOutput += " ooh it's cold out!";
} else if (outputC > 40) {
    totalOutput += " ooh it's hot out!";
} else if (outputC > 100) {
 totalOutput += " ooh it's boiling!";
} else {
    var totalOutput;
}
  return totalOutput ;
};

var display = function( data ){
        var totalOutput = document.querySelector('#output');
        output.innerText = data;
    }

var displayAdvice = function ( data2 ) {
            var adviceText = document.querySelector('#output2');
            output2.innerText = data2;
          }