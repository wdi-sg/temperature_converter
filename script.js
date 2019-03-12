var temperatureInFahr = prompt("Enter Temperature in Farenheit:");
console.log(temperatureInFahr);
var fahrToCelcius = function (fahr) {
    return (fahr - 32)*5/9;
}
alert("You entered " + temperatureInFahr + "Farenheit, which is " + fahrToCelcius(temperatureInFahr) + " Celcius.");