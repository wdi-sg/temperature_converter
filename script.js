var userInputNum = prompt("Input the temperature");
var userInputUnit = prompt("Input the type of temperature unit");
var userInputName = prompt("Input your name");

var temperatureInNum = userInputNum;
var temperatureInUnit = userInputUnit;

var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'Dont go outside if you want to live'
];

var tempArray = [];

var userInputBoolean = prompt("Do you want to stop?");

while(userInputBoolean == "no") {
    userInputNum = prompt("Input the temperature");
    userInputUnit = prompt("Input the type of temperature unit");
    userInputName = prompt("Input your name");
    userInputBoolean = prompt("Do you want to stop?");
       if (userInputBoolean == "yes") {
            break;
        }
  }

if(temperatureInUnit == "fahrenheit"){
    var temperatureInfahr = userInputNum;
    var temp = [temperatureInfahr];
    console.log("Temperature input by user in Fahrenheit" + " " + temp[0] + "F");
    var temperatureInCelsius = (userInputNum - 32) * (5 / 9);
    temp.push(temperatureInCelsius);
    console.log("Temperature converted into Celsius" + " " + temp[1] + "C");
    var temperatureInKelvin = (userInputNum - 32) * (5 / 9 ) + 273.15;
    temp.push(temperatureInKelvin);
    console.log("Temperature converted into Kelvin" + " " + temp[2] + "K");
    console.log(temp);
    tempArray.push(temp);
    if(temp[1] < 0){
        console.log("ooh it's cold out there. " + "Wear a " + clothes[3] + " " + userInputName);
    } else if(temp[1] > 40 && temp[1] < 100){
        console.log("ooh it's hot out there. " + "Wear a " + clothes[1] + " " + userInputName);
    } else if(temp[1] >= 100){
        console.log("Your literally boiling. " + clothes[7] + " " + userInputName);
    } else {
        console.log("Just the right temperature. " + "Wear a " + clothes[2] + " " + userInputName)
    }
} else if(temperatureInUnit == "kelvin"){
    var temperatureInKelvin = userInputNum;
    var temp = [temperatureInKelvin];
    console.log("Temperature input by user in Kelvin" + " " + temp[0] + "K");
    var temperatureInfahr = (userInputNum - 273.15) * (9 / 5) + 32;
    temp.push(temperatureInfahr);
    console.log("Temperature converted into Fahrenheit" + " " + temp[1] + "F");
    var temperatureInCelsius = (userInputNum - 273.15);
    temp.push(temperatureInCelsius);
    console.log("Temperature converted into Celsius" + " " + temp[2] + "C");
    console.log(temp);
    tempArray.push(temp);
    if(temp[2] < 0){
        console.log("ooh it's cold out there. " + "Wear a " + clothes[3] + " " + userInputName);
    } else if(temp[2] > 40 && temp[2] < 100){
        console.log("ooh it's hot out there. " + "Wear a " + clothes[1] + " " + userInputName);
    } else if(temp[2] >= 100){
        console.log("Your literally boiling. " + clothes[7] + " " + userInputName);
    } else {
        console.log("Just the right temperature." + "Wear a " + clothes[2] + " " + userInputName)
    }
} else if(temperatureInUnit == "celsius"){
    var temperatureInCelsius = userInputNum;
    var temp = [temperatureInCelsius];
    console.log("Temperature input by user in Celsius" + " " + temp[0] + "C");
    var temperatureInfahr = userInputNum * (9 / 5) + 32;
    temp.push(temperatureInfahr);
    console.log("Temperature converted into Fahrenheit" + " " + temp[1] + "F");
    var temperatureInKelvin = Number(userInputNum) + 273.15;
    temp.push(temperatureInKelvin);
    console.log("Temperature converted into Kelvin" + " " + temperatureInKelvin + "K");
    console.log(temp);
    tempArray.push(temp);
    if(temp[0] < 0){
        console.log("ooh it's cold out there. " + "Wear a " + clothes[3] + " " + userInputName);
    } else if(temp[0] > 40 && temp[0] < 100){
        console.log("ooh it's hot out there. " + "Wear a " + clothes[1] + " " + userInputName);
    } else if(temp[0] >= 100){
        console.log("Your literally boiling. " + clothes[7] + " " + userInputName);
    } else {
        console.log("Just the right temperature. " + "Wear a " + clothes[2] + " " + userInputName)
    }
}
else {
    alert("Error! Type in the right inputs!");
}

for(var i = 0; tempArray.length > i; i++){
        console.log("Array using for loop: " + tempArray[i]);
    }

//### Part 7

// Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.

// var userInputBoolean = prompt("Do you want to stop?");

// while(userInputBoolean == "no") {
//     userInputNum = prompt("Input the temperature");
//     userInputUnit = prompt("Input the type of temperature unit");
//     userInputName = prompt("Input your name");
//     userInputBoolean = prompt("Do you want to stop?");
//        if (userInputBoolean == "yes") {
//             break;
//         }
//   }

// ### Part 6
// Use a for or while loop to print out the conversion results for each temperature. It's OK if you need to simplify your `console.log` statements and remove strings.

// var tempArray = [];
// for(var i = 0; tempArray.length > i; i++){
//         console.log("Array using for loop: " + tempArray[i]);
//     }

// ### Part 5
// Also prompt the user for their name. When you output the result, suggest the type of clothing they should wear from an array of values:

// ```
// var clothes = [
//  'nothing',
//  'swimsuit',
//  'shorts and shirt',
//  'sweater',
//  'sweater + jacket',
//  'heavy jacket',
//  'heavy jacket and toe warmers',
//  'dont go outside if you want to live'
// ];

// var userInputNum = prompt("Input the temperature");
// var userInputUnit = prompt("Input the type of temperature unit")
// var userInputName = prompt("Input your name");

// var temperatureInNum = userInputNum;
// var temperatureInUnit = userInputUnit;

// var clothes = [
//  'nothing',
//  'swimsuit',
//  'shorts and shirt',
//  'sweater',
//  'sweater + jacket',
//  'heavy jacket',
//  'heavy jacket and toe warmers',
//  'Dont go outside if you want to live'
// ];

// if(temperatureInUnit == "fahrenheit"){
//     var temperatureInfahr = userInputNum;
//     var temp = [temperatureInfahr];
//     console.log("Temperature input by user in Fahrenheit" + " " + temp[0] + "F");
//     var temperatureInCelsius = (userInputNum - 32) * (5 / 9);
//     temp.push(temperatureInCelsius);
//     console.log("Temperature converted into Celsius" + " " + temp[1] + "C");
//     var temperatureInKelvin = (userInputNum - 32) * (5 / 9 ) + 273.15;
//     temp.push(temperatureInKelvin);
//     console.log("Temperature converted into Kelvin" + " " + temp[2] + "K");
//     console.log(temp);
//     if(temp[1] < 0){
//         console.log("ooh it's cold out there. " + "Wear a " + clothes[3] + " " + userInputName);
//     } else if(temp[1] > 40 && temp[1] < 100){
//         console.log("ooh it's hot out there. " + "Wear a " + clothes[1] + " " + userInputName);
//     } else if(temp[1] >= 100){
//         console.log("Your literally boiling. " + clothes[7] + " " + userInputName);
//     } else {
//         console.log("Just the right temperature. " + "Wear a " + clothes[2] + " " + userInputName)
//     }
// } else if(temperatureInUnit == "kelvin"){
//     var temperatureInKelvin = userInputNum;
//     var temp = [temperatureInKelvin];
//     console.log("Temperature input by user in Kelvin" + " " + temp[0] + "K");
//     var temperatureInfahr = (userInputNum - 273.15) * (9 / 5) + 32;
//     temp.push(temperatureInfahr);
//     console.log("Temperature converted into Fahrenheit" + " " + temp[1] + "F");
//     var temperatureInCelsius = (userInputNum - 273.15);
//     temp.push(temperatureInCelsius);
//     console.log("Temperature converted into Celsius" + " " + temp[2] + "C");
//     console.log(temp);
//     if(temp[2] < 0){
//         console.log("ooh it's cold out there. " + "Wear a " + clothes[3] + " " + userInputName);
//     } else if(temp[2] > 40 && temp[2] < 100){
//         console.log("ooh it's hot out there. " + "Wear a " + clothes[1] + " " + userInputName);
//     } else if(temp[2] >= 100){
//         console.log("Your literally boiling. " + clothes[7] + " " + userInputName);
//     } else {
//         console.log("Just the right temperature." + "Wear a " + clothes[2] + " " + userInputName)
//     }
// } else if(temperatureInUnit == "celsius"){
//     var temperatureInCelsius = userInputNum;
//     var temp = [temperatureInCelsius];
//     console.log("Temperature input by user in Celsius" + " " + temp[0] + "C");
//     var temperatureInfahr = userInputNum * (9 / 5) + 32;
//     temp.push(temperatureInfahr);
//     console.log("Temperature converted into Fahrenheit" + " " + temp[1] + "F");
//     var temperatureInKelvin = Number(userInputNum) + 273.15;
//     temp.push(temperatureInKelvin);
//     console.log("Temperature converted into Kelvin" + " " + temperatureInKelvin + "K");
//     console.log(temp);
//     if(temp[0] < 0){
//         console.log("ooh it's cold out there. " + "Wear a " + clothes[3] + " " + userInputName);
//     } else if(temp[0] > 40 && temp[0] < 100){
//         console.log("ooh it's hot out there. " + "Wear a " + clothes[1] + " " + userInputName);
//     } else if(temp[0] >= 100){
//         console.log("Your literally boiling. " + clothes[7] + " " + userInputName);
//     } else {
//         console.log("Just the right temperature. " + "Wear a " + clothes[2] + " " + userInputName)
//     }
// }
// else {
//     alert("Error! Type in the right inputs!");
//     var userInputNum = prompt("Input the temperature");
//     var userInputUnit = prompt("Input the type of temperature unit")
// }

// ### Part 4
// If the temperature is below 0 also print out a message like "ooh it's cold out".

// If the temperature is above 40 also print out a message like "ooh it's hot out".

// If the temperature is above 100 print out a message like "your literally boiling".

// ### Part 3

// Use an array to store and access the user-submitted and converted temperatures. Your array will end up looking something like this...

// ```js
// var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
// ```

// When you `console.log` the temperatures, make sure you do that by accessing the values stored in the array.

// ### Part 2

// > Your application should...

// * Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
// * Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius, or Kelvin.
// * The application should print out the user-submitted temperature in the two remaining units.
//   * So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
//     ```text
//     32° F = 0°C = 273.15K
//     ```

// Using Conditionals, have your code accept either fahrenheit, celsius or kelvin, and output the other two temp types.

// var userInputNum = prompt("Input the temperature");
// var userInputUnit = prompt("Input the type of temperature unit")

// var temperatureInNum = userInputNum;
// var temperatureInUnit = userInputUnit;

// if(temperatureInUnit == "fahrenheit"){
//     var temperatureInCelsius = (userInputNum - 32) * (5 / 9);
//     console.log("Temperature converted into Celsius" + " " + temperatureInCelsius + "C");
//     var temperatureInKelvin = (userInputNum - 32) * (5 / 9 ) + 273.15;
//     console.log("Temperature converted into Kelvin" + " " + temperatureInKelvin + "K");
// } else if(temperatureInUnit == "kelvin"){
//     var temperatureInfahr = (userInputNum - 273.15) * (9 / 5) + 32;
//     console.log("Temperature converted into Fahrenheit" + " " + temperatureInfahr + "F");
//     var temperatureInCelsius = (userInputNum - 273.15);
//     console.log("Temperature converted into Celsius" + " " + temperatureInCelsius + "C");
// } else if(temperatureInUnit == "celsius"){
//     var temperatureInfahr = userInputNum * (9 / 5) + 32;
//     console.log("Temperature converted into Fahrenheit" + " " + temperatureInfahr + "F");
//     var temperatureInKelvin = Number(userInputNum) + 273.15;
//     console.log("Temperature converted into Kelvin" + " " + temperatureInKelvin + "K");
// }
// else {
//     alert("Error! Type in the right inputs!");
//     var userInputNum = prompt("Input the temperature");
//     var userInputUnit = prompt("Input the type of temperature unit")
// }

// ### Part 1

// > Your application should...

// * Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
// * After receiving input it should log that same temperature in both Kelvin and Celsius.