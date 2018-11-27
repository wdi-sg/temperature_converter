var clothes = [
//0
'nothing',
//1
'swimsuit',
//2
'shorts and shirt',
//3
'sweater',
//4
'sweater + jacket',
//5
'heavy jacket',
//6
'heavy jacket and toe warmers',
//7
'don\'t go outside if you want to live'
];

var userName = prompt("Give me your name, buddy.")

conversions:
while (true){

    do {
        var temperature = prompt("Please enter a temperature, or type 'exit' to end this program.")
        if (temperature === "exit"){
            break conversions;
        }
    } while (isNaN(temperature) || temperature === "")

    do {
        var temperatureUnit = prompt("Please enter a temperature unit (Fahrenheit, Celsius or Kelvin only).").toLowerCase()
        if(temperatureUnit === "fahrenheit" ||
            temperatureUnit=== "kelvin" ||
            temperatureUnit === "celsius"){
            break;
        }
    } while (true)

    var temperature = parseInt(temperature)
    var temps = [temperature]

    switch (temperatureUnit){
        case "fahrenheit":
            temps[1] = (temperature - 32) * 5/9
            temps[2] = (temperature - 32) * 5/9 + 273.15
            console.log("You entered a temperature of " + temps[0] + "F. That is equivalent to " + temps[1] + "C or " + temps[2] + "K.")
            temperatureAdvice(temps[1])
            break;
        case "celsius":
            temps[1] = (temperature * 9/5) + 32
            temps[2] = temperature + 273.15
            console.log("You entered a temperature of " + temps[0] + "C. That is equivalent to " + temps[1] + "F or " + temps[2] + "K.")
            temperatureAdvice(temps[0])
            break;
        case "kelvin":
            temps[1] = ((temperature - 273.15) * 9/5) + 32
            temps[2] = temperature - 273.15
            console.log("You entered a temperature of " + temps[0] + "K. That is equivalent to " + temps[1] + "F or " + temps[2] + "C.")
            temperatureAdvice(temps[2])
            break;
    }

    function commentOnTemp(tempInCelsius){
        if (tempInCelsius > 100){
            console.log("It's literally hotter than boiling temperature outside!")
        } else if (tempInCelsius > 40){
            console.log("ooh it's hot out")
        } else if (tempInCelsius < 0){
                console.log("ooh it's cold out")
            // console.log(userName + ", I suggest that you wear a " + clothes[5] + ", or a " + clothes[6] + " if you're heading out")
        }
    }

    function temperatureAdvice(tempInCelsius){
        commentOnTemp(tempInCelsius)

        var suggestionString = userName + ", if you're heading out, I suggest that you wear a "

        if (tempInCelsius > 50){
            suggestionString = userName + ", I suggest that you " + clothes[7] + "."
        } else if (tempInCelsius > 40){
            suggestionString += clothes[2] + ", or a " + clothes[1] + " or " + clothes[0]
        } else if (tempInCelsius > 30){
            suggestionString += clothes[2]
        } else if (tempInCelsius > 18){
            suggestionString += "t-shirt and jeans"
        } else if (tempInCelsius > 10){
            suggestionString += clothes[3] + ", or a " + clothes[4]
        } else if (tempInCelsius > 0){
            suggestionString += clothes[5]
        } else if (tempInCelsius > -20){
            suggestionString += clothes[6]
        } else {
            suggestionString = userName + ", I suggest that you " + clothes[7] + "."
        }

        console.log (suggestionString + ".")
    }
}