//Part 1

var  userName = prompt("Hi what your name?", "User");
    if (userName == null) {
    userName = 'User';
}

var temperatureInFahr =  prompt("Hi " + userName + " , may I know the current temperature now in Fahrenheit? ");
var kelvin = (temperatureInFahr - 32 ) * 5/9 + 273.15;
var celsius = (temperatureInFahr -32) * 5/9;
    console.log( "The current temperature is " + temperatureInFahr + "F");
    console.log("The current temperature is " + kelvin+ "K");

//Part 2
var temperatureUnit = ["Fahrenheit", "Celsius" , "Kelvin"];
var tempUnit = prompt("What's your temperature unit? Fahrenheit,Celsius,Kelvin");
var temperature= prompt ("What's is current temperature?");
if (tempUnit === temperatureUnit[0])
{
    console.log((temperature- 32 ) * 5/9 + 273.15 + "K");
    console.log((temperature- 32 ) * 5/9 + "C");
}
else if(tempUnit === temperatureUnit[1])
{
    console.log(temperature + 273.15 + "K");
    console.log(temperature * 9/5 + 32 + "F");
}
else if(tempUnit === temperatureUnit[2])
{
    console.log(temperature - 273.15 + "C"); // Kelvin to Celsius
    console.log((temperature -273.15) * 9/5 +32 + "F"); //Kelvin to Fahren
}
else
{
    console.log("Invalid");
}

//Part 3

var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];