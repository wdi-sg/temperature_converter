//Part 1
//var temperatureInFahr = prompt ("Please enter temperature in Farenheit.");
//var temperatureInKelvin = temperatureInFahr-459.67;
//var temperatureInCelsius = temperatureInFahr+32;
//var temperatureInFahr = temperatureInCelsius-17.7778;

//Part 2
var temperature = prompt("Please enter temperature.");
/*if(typeof temperature !== 'number'){
    alert("Invalid input!");
    prompt("Please enter temperature.");
    temperature = userInput.nextInt();
    }*/


var question = "Please enter temperature unit (Kelvin, Celsius, Farenheit)."
var temperatureUnit = prompt(question).toLowerCase();

 //&& (temperatureUnit == "kelvin"|| temperatureUnit == "celsius"|| temperatureUnit =="farenheit")) {

if (temperatureUnit === "celsius"){
    var temperatureInKelvin = temperature+273.15;
    var temperatureInFahr = (temperature*1.8)+32;
alert(temperature + " degC = " + temperatureInKelvin + " K = " + temperatureInFahr + " degF");
    } else if (temperatureUnit=== "kelvin"){
        var temperatureInCelsius = temperature-273.15;
        var temperatureInFahr = (temperature*1.8)-459.67;
        alert(temperature+" K = " + temperatureInCelsius + " degC = " + temperatureInFahr + " degF");
    } else if (temperatureUnit ==="farenheit"){
        var temperatureInKelvin = (temperature+459.67)*5/9;
        var temperatureInCelsius = (temperature-32)*5/9;
        alert(temperature + " degF = " + temperatureInKelvin + " K = " + temperatureInCelsius + " degC");
    }




//Part 3
//Some additional tryout stuff
//var tempCelsius = [temperature, allUnits.temperatureInFahr[0], allUnits.temperatureInKelvin[0]];
//var tempKelvin = [temperature, temperatureInCelsius, temperatureInFahr];
//var tempFahr = [temperature, temperatureInKelvin, temperatureInCelsius];

var allUnits =
    {
    temperatureIn: [{
        unit: "celsius",
        fahr: (temperature*1.8)+32,
        kelvin: temperature+273.15
    },
    {   unit: "kelvin",
        fahr: (temperature*1.8)-459.67,
        celsius: temperature-273.15
    },
    {unit: "farenheit",
    kelvin: (temperature+459.67)*5/9,
    celsius: (temperature-32)*5/9
    }]
};


var converted_temp_1;
var converted_temp_2;
var temps = [temperature, converted_temp_1, converted_temp_2];

if (temperatureUnit = "celsius") {
temps[1] = allUnits.temperatureIn[0].fahr;
temps[2] = allUnits.temperatureIn[0].kelvin;
console.log(temps);
}
else if (temperatureUnit = "kelvin") {
temps[1] = allUnits.temperatureIn[1].fahr;
temps[2] = allUnits.temperatureIn[1].celsius;
console.log(temps);
}
else if (temperatureUnit = "farenheit") {
temps[1] = allUnits.temperatureIn[2].kelvin;
temps[2] = allUnits.temperatureIn[2].celsius;
console.log(temps);
}


//Part 4
if (temperature<0){
    console.log("Brrr it's cold outside!");
} else if (temperature>40){
    console.log("Woah it's hot!");
}else if (temperature>100){
    console.log("You will melt!");
}






