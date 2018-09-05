//Part 1
//var temperatureInFahr = prompt ("Please enter temperature in Farenheit.");
//var temperatureInKelvin = temperatureInFahr-459.67;
//var temperatureInCelsius = temperatureInFahr+32;
//var temperatureInFahr = temperatureInCelsius-17.7778;

//Part 2
var userName = prompt("Please enter your name.")
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

if (temperatureUnit === "celsius") {
temps[1] = allUnits.temperatureIn[0].fahr;
temps[2] = allUnits.temperatureIn[0].kelvin;
console.log(temps);
}
else if (temperatureUnit === "kelvin") {
temps[1] = allUnits.temperatureIn[1].fahr;
temps[2] = allUnits.temperatureIn[1].celsius;
console.log(temps);
}
else if (temperatureUnit === "farenheit") {
temps[1] = allUnits.temperatureIn[2].kelvin;
temps[2] = allUnits.temperatureIn[2].celsius;
console.log(temps);
}


//Part 5
var clothesCold = ['a scarf', 'a coat', 'leg warmers', 'a sweater'];
var arrCold = clothesCold[Math.floor(Math.random()*clothesCold.length)];
var clothesHot = ['less', 'a cap', 'shorts', 'a singlet'];
var arrHot = clothesHot[Math.floor(Math.random()*clothesHot.length)];
var clothesMelt = ['nothing', 'swimwear', 'an ice pack'];
var arrMelt = clothesMelt[Math.floor(Math.random()*clothesMelt.length)];


//Part 4
if ((temperatureUnit === "celsius" && temps[0]<0) || (temperatureUnit === "kelvin" && temps[2]<0 )|| (temperatureUnit ==="farenheit" && temps[2]<0)){
    console.log(`Hello ${userName}! Brrr it's cold outside! Please wear ${arrCold}.`);
} else if ((temperatureUnit === "kelvin" && temps[2]>40)||(temperatureUnit ==="celsius" && temps[0]>40)|| (temperatureUnit ==="farenheit" && temps[2]>40)) {
    console.log(`Hello ${userName}! Woah it's hot, man! Please wear ${arrHot}.`);
}else if ((temperatureUnit === "farenheit" && temps[2]>100)||(temperatureUnit ==="celsius" && temps[0]>100)||(temperatureUnit === "kelvin" && temps[2]>100)){
    console.log(`Hello ${userName}! You will melt! Please wear ${arrMelt}.`);
}


//Part 6
var arrUnits = ["°C", "K", "°F"];

for(var i=0; i<temps.length; i++){
        console.log("Temperature: " + temps[i] + " " + arrUnits[i]);
    }






