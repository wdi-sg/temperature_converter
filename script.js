var userInput = prompt("What's your name?");
console.log(userInput);

alert("I'm saying something");

var userInput1 = prompt("Please enter temperature in numerical value.");

console.log("Temperature input is "+userInput1);

var temperature = userInput1;

var userInput2 = prompt("Please enter temperature unit. (Fahrenheit/Celsius/Kelvin.)")

console.log("The unit you have chosen is "+userInput2);

var Cd,Kd,Fd;

if (userInput2 == "Fahrenheit"){

    Cd = ((userInput1 - 32) * (5/9));
    Kd = ((userInput1 - 459.67)* (5/9));

    console.log(userInput1+"F = "+Cd+"C = "+Kd+"K.");
    }

else if (userInput2 == "Celsius"){

    Fd = ((userInput1 + 32) * (9/5));
    Kd = (userInput1 + 273.15);

    console.log( Fd+"F = "+userInput1+"C = "+Kd+"K.");
    }

else if (userInput2 == "Kelvin"){

    Cd = (userInput1 - 273.15);
    Fd = ((1.8*(userInput1 - 273.15))+32);

    console.log( Fd+"F = "+Cd+"C = "+userInput1+"K.");
    };