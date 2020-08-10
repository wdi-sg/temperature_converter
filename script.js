console.log("hello script js");

var state = 0;
var tempUnit = "";
var num = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );

    if ( state == 0 ) {

        if ( !isNaN(currentInput) ) {

            state ++;
            num = currentInput;
            output = "Please input a starting temperature unit.";

      }

        else {

            output = "Please input numerical numbers only!";

      }

    }

    else if ( state == 1 ) {

        if ( currentInput.toLowerCase() == "fahrenheit" ) {

            output = fahrenheitConverter(num) + " \n\nWould you like to convert another number? Y/N";


            num = 0;
            state ++;

        }

        else if ( currentInput.toLowerCase() == "kelvin" ) {

            output = kelvinConverter(num) + " \n\nWould you like to convert another number? Y/N";
            num = 0;
            state ++;

        }

        else if ( currentInput.toLowerCase() == "celsius" ) {

            output = celsiusConverter(num) + " \n\nWould you like to convert another number? Y/N";
            num = 0;
            state ++;

        }

        else {

            output = "Input not recognised. Please input either 'Fahrenheit', 'Kelvin', or 'Celsius'.";

        }
    }

    else if ( state == 2 ) {

        if ( currentInput.toLowerCase() == "y" ) {

            output = "Please input a starting temperature.";
            state = 0;

        }

        else if ( currentInput.toLowerCase() == "n" ) {

            output = "Thank you for using our temperature converter!";
            state++;

        }

        else {

            output = "Input not recognised. Please input either 'Y' or 'N'.";

        }
    }

    else if ( state == 3 ) {

        output = "Thank you for using our temperature converter!";

    }



  input.value = "";
  return output;
}

/*
* fahrenheitConverter
*
* function purpose
* convert degreesFahrenheit to kelvin and degreesCelsius
*
* data description
* degreesFahrenheit - temperature to convert (from fahrenheit)
*
* function signature
* degreesFahrenheit (number) --> kelvin (number), degreesCelsius (number)
*
* input example
* var degreesFahrenheit = 70
*
* functional examples
* var output = fahrenheitConverter( 70 ) // 70°F = 294.3K = 21.1°C.
*/

var fahrenheitConverter = function ( degreesFahrenheit ) {

    /*
    take in numerical value. this will be in degrees fahrenheit.

    for kelvin
    kelvin = ( degreesFahrenheit - 32 ) * 5/9 +273.15

    for celsius
    degreesCelsius = ( degreesFahrenheit - 32 ) * 5/9
    */

    var kelvin = ( degreesFahrenheit - 32 ) * 5/9 + 273.15;
    var degreesCelsius = ( degreesFahrenheit - 32 ) * 5/9;

    var output = degreesFahrenheit + "\xB0F = " + kelvin.toFixed(1) + "K = " + degreesCelsius.toFixed(1) + "\xB0C."

    return output;

}

/*
* kelvinConverter
*
* function purpose
* convert kelvin to degreesFahrenheit and degreesCelsius
*
* data description
* kelvin - temperature to convert (from kelvin)
*
* function signature
* kelvin (number) --> degreesFahrenheit (number), degreesCelsius (number)
*
* input example
* var kelvin = 70
*
* functional examples
* var output = kelvinConverter( 70 ) // 70K = -333.7°F = -203.2°C.
*/

var kelvinConverter = function ( kelvin ) {

    /*
    take in numerical value. this will be in kelvin.

    for fahrenheit
    degreesFahrenheit = ( kelvin - 273.15 ) * 9/5

    for celsius
    degreesCelsius = kelvin - 273.15
    */

    var degreesFahrenheit = ( kelvin - 273.15 ) * 9/5 + 32   ;
    var degreesCelsius = parseInt(kelvin) - 273.15;

    var output = kelvin + "K = " + degreesFahrenheit.toFixed(1) + "\xB0F = " + degreesCelsius.toFixed(1) + "\xB0C."

    return output;

}

/*
* celsiusConverter
*
* function purpose
* convert degreesCelsius to degreesFahrenheit and degreesCelsius
*
* data description
* degreesCelsius - temperature to convert (from celsius)
*
* function signature
* degreesCelsius (number) --> degreesFahrenheit (number), degreesCelsius (number)
*
* input example
* var degreesCelsius = 70
*
* functional examples
* var output = celsiusConverter( 70 ) // 70°C = 158°F = 343.15K.
*/

var celsiusConverter = function ( degreesCelsius ) {

    /*
    take in numerical value. this will be in celsius.

    for fahrenheit
    degreesFahrenheit = ( degreesCelsius * 9/5 ) + 32

    for kelvin
    kelvin = degreesCelsius + 273.15
    */

    var degreesFahrenheit = ( degreesCelsius * 9/5 ) + 32;
    var kelvin = parseInt(degreesCelsius) + 273.15;

    var output = degreesCelsius + "\xB0C = " + degreesFahrenheit.toFixed(1) + "\xB0F = " + kelvin.toFixed(1) + "K.";

    return output;

}