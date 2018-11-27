
//Part 1:
/*
var temperatureInFahr = prompt("What's your temperature in Fahrenheit?");

var kelvin = (temperatureInFahr + 459.67) * 5/9;
var celsius = (temperatureInFahr -32) * 5/9;
console.log("Your conversion from Fahrenheit to kelvin is " + kelvin+ "K");
console.log("Your conversion from Fahrenheit to celsius is " + celsius+ "C");
console.log("You entered: " + temperatureInFahr);
*/
//=====================================================

/*

//Part 2:
var temperatureUnit = ["fahrenheit","celsius","kelvin"];
var temp = prompt("What's your temperature?");
var userTempUnit = prompt("What's your temperature unit? Fahrenheit(F),Celsius(C),Kelvin");

// If user enter for Fahrenheit
if(userTempUnit === temperatureUnit[0])
{
    console.log(temp + 459.67) * 5/9; //Kelvin Output
    console.log(temp -32) * 5/9; // Celsius output
}
else if(userTempUnit === temperatureUnit[1]) // user enter for Celsius
{
    console.log(temp + 273.15 + "Kelvin"); //Celsius to Kelvin
    console.log(temp * 9/5 + 32 + "Fahrenheit"); //Celsius to Fahren
}
else if(userTempUnit === temperatureUnit[2]) //user enter for Kelvin
{
    console.log(temp - 273.15 + "Celsius"); // Kelvin to Celsius
    console.log(temp * 9/5 - 459.67 + "Fahrenheit"); //Kelvin to Fahren
}
else
{
    console.log("Invalid");
}

*/
// Part 3
/*
var temperatureUnit = ["fahrenheit","celsius","kelvin"];
var userTemp = prompt("What's your temperature?");
var userTempUnit = prompt("What's your temperature unit? Fahrenheit(F),Celsius(C),Kelvin");

var temps = [];

// If user enter for Fahrenheit
if(userTempUnit === temperatureUnit[0])
{
    temps[0] = userTemp;
    temps[1] = (userTemp + 459.67) * 5/9; //Kelvin Output
    temps[2] = (userTemp -32) * 5/9; // Celsius output
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[1]) // user enter for Celsius
{
    temps[0] = userTemp;
    temps[1] = userTemp + 273.15; //Celsius to Kelvin
    temps[2] = userTemp * 9/5 + 32; //Celsius to Fahren
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[2]) //user enter for Kelvin
{
    temps[0] = userTemp;
    temps[1] = userTemp - 273.15; // Kelvin to Celsius
    temps[2] = userTemp * 9/5 - 459.67; //Kelvin to Fahren
    console.log(temps);
}
else
{
    console.log("Invalid");
}
*/

//Part 4
/*
var temperatureUnit = ["fahrenheit","celsius","kelvin"];
var userTemp = prompt("What's your temperature?");
if (userTemp < 0)
{
    console.log("ooh it's cold out")
}
else if(userTemp > 40)
{
    console.log("ooh it's hot out");
}
else if(userTemp > 100)
{
    console.log("your literally boiling");
}


var userTempUnit = prompt("What's your temperature unit? Fahrenheit(F),Celsius(C),Kelvin");

var temps = [];

// If user enter for Fahrenheit
if(userTempUnit === temperatureUnit[0])
{
    temps[0] = userTemp;
    temps[1] = (userTemp + 459.67) * 5/9; //Kelvin Output
    temps[2] = (userTemp -32) * 5/9; // Celsius output
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[1]) // user enter for Celsius
{
    temps[0] = userTemp;
    temps[1] = userTemp + 273.15; //Celsius to Kelvin
    temps[2] = userTemp * 9/5 + 32; //Celsius to Fahren
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[2]) //user enter for Kelvin
{
    temps[0] = userTemp;
    temps[1] = userTemp - 273.15; // Kelvin to Celsius
    temps[2] = userTemp * 9/5 - 459.67; //Kelvin to Fahren
    console.log(temps);
}
else
{
    console.log("Invalid");
}
*/
//Part 5
/*
var temperatureUnit = ["fahrenheit","celsius","kelvin"];
var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'dont go outside if you want to live'
];

var userName = prompt("What's your name?");
var userTemp = prompt("What's your temperature?");

if (userTemp < 0)
{
    console.log("ooh it's cold out")
    console.log("Please wear " + clothes[5] + " or " + clothes[6]);

}
else if(userTemp > 40)
{
    console.log("ooh it's hot out");
    console.log("Please wear " + clothes[1] + " or " + clothes[2]);
}
else if(userTemp > 100)
{
    console.log("your literally boiling");
    console.log("Please wear " + clothes[0] + " or " + clothes[7]);
}

var userTempUnit = prompt("What's your temperature unit? Fahrenheit(F),Celsius(C),Kelvin");

var temps = [];

// If user enter for Fahrenheit
if(userTempUnit === temperatureUnit[0])
{
    temps[0] = userTemp;
    temps[1] = (userTemp + 459.67) * 5/9; //Kelvin Output
    temps[2] = (userTemp -32) * 5/9; // Celsius output
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[1]) // user enter for Celsius
{
    temps[0] = userTemp;
    temps[1] = userTemp + 273.15; //Celsius to Kelvin
    temps[2] = userTemp * 9/5 + 32; //Celsius to Fahren
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[2]) //user enter for Kelvin
{
    temps[0] = userTemp;
    temps[1] = userTemp - 273.15; // Kelvin to Celsius
    temps[2] = userTemp * 9/5 - 459.67; //Kelvin to Fahren
    console.log(temps);
}
else
{
    console.log("Invalid");
}

*/

//Part 6
/*
var temperatureUnit = ["fahrenheit","celsius","kelvin"];
var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'dont go outside if you want to live'
];

var userName = prompt("What's your name?");
var userTemp = prompt("What's your temperature?");

if (userTemp < 0)
{
    console.log("ooh it's cold out")
    console.log("Please wear " + clothes[5] + " or " + clothes[6]);

}
else if(userTemp > 40)
{
    console.log("ooh it's hot out");
    console.log("Please wear " + clothes[1] + " or " + clothes[2]);
}
else if(userTemp > 100)
{
    console.log("your literally boiling");
    console.log("Please wear " + clothes[0] + " or " + clothes[7]);
}

var userTempUnit = prompt("What's your temperature unit? Fahrenheit(F),Celsius(C),Kelvin");

var temps = [];

// If user enter for Fahrenheit
if(userTempUnit === temperatureUnit[0])
{
    temps[0] = userTemp;
    temps[1] = (userTemp + 459.67) * 5/9; //Kelvin Output
    temps[2] = (userTemp -32) * 5/9; // Celsius output
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[1]) // user enter for Celsius
{
    temps[0] = userTemp;
    temps[1] = userTemp + 273.15; //Celsius to Kelvin
    temps[2] = userTemp * 9/5 + 32; //Celsius to Fahren
    console.log(temps);
}
else if(userTempUnit === temperatureUnit[2]) //user enter for Kelvin
{
    temps[0] = userTemp;
    temps[1] = userTemp - 273.15; // Kelvin to Celsius
    temps[2] = userTemp * 9/5 - 459.67; //Kelvin to Fahren
    console.log(temps);
}
else
{
    console.log("Invalid");
}

for(var i = 0; i < temps.length; i++)
{
    console.log(temps[i]);
}

*/

//Part  7
var temperatureUnit = ["fahrenheit","celsius","kelvin"];


var temps = [];

var userName = prompt("What's your name?");

    //var userTemp = prompt("What's your temperature?");

while(userTemp !== " " || userTemp === "stop")
{
    var userTemp = prompt("What's your temperature?");
    var userTempUnit = prompt("What's your temperature unit? Fahrenheit(F),Celsius(C),Kelvin");
// If user enter for Fahrenheit
    if(userTempUnit === temperatureUnit[0])
    {
        temps[0] = userTemp;
        temps[1] = (userTemp + 459.67) * 5/9; //Kelvin Output
        temps[2] = (userTemp -32) * 5/9; // Celsius output
        alert("Entered Temp: " + temps[0] + " Kelvin: " + temps[1] + " Celsius: " + temps[2]);
    }
    else if(userTempUnit === temperatureUnit[1]) // user enter for Celsius
    {
        temps[0] = userTemp;
        temps[1] = userTemp + 273.15; //Celsius to Kelvin
        temps[2] = userTemp * 9/5 + 32; //Celsius to Fahren
        alert("Entered Temp: " + temps[0] + " Kelvin: " + temps[1] + " Fahrenheit: " + temps[2]);
    }
    else if(userTempUnit === temperatureUnit[2]) //user enter for Kelvin
    {
        temps[0] = userTemp;
        temps[1] = userTemp - 273.15; // Kelvin to Celsius
        temps[2] = userTemp * 9/5 - 459.67; //Kelvin to Fahren
        alert("Entered Temp: " + temps[0] + "Celsius: " + temps[1] + "Fahrenheit: " + temps[2]);
    }
    else
    {
        console.log("Invalid");
    }
    //break;
}

