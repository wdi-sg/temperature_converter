


//fahrenheit to kelvin to Celsius
function fahrenheit2Kelvin(fahrenheit)
{
  return 5/9 * (fahrenheit - 32) + 273;
}
function fahrenheit2Celsius(fahrenheit)
{
  return (fahrenheit - 32) * 5 / 9;
}
//celsius to kelvin and farenheit
function celsius2Kelvin(celsius)
{
    //+ will become string
  return celsius + 273;
}
function celsius2fahrenheit(celsius)
{
  return (9/5 * celsius) + 32;
}
//kelvin to farenheit and celsius
function kelvin2Farenheit(kelvin)
{
  return (9/5 * (kelvin - 273)) + 32;
}
function kelvin2Celsius(kelvin)
{
    // - will become number
  return kelvin - 273;
}
document.querySelector('#input').addEventListener('change', function(event){
    //.check is selected true or false
    const a = document.getElementById('selectF').checked;
    const b = document.getElementById('selectC').checked;
    const c = document.getElementById('selectK').checked;
    var kelvin = 0
    var celsius = 0
    var farenheit = 0
    //parse as integer
    var currentInput = parseInt(event.target.value);
    if (a) {
       farenheit = currentInput
       kelvin = farenheit2Kelvin(currentInput)
       celsius = fahrenheit2Celsius(currentInput)
    } else if (b) {
        celsius = currentInput
       kelvin = celsius2Kelvin(currentInput)
       farenheit = celsius2fahrenheit(currentInput)
    } else {
        kelvin = currentInput
       celsius = kelvin2Celsius(currentInput)
       farenheit = kelvin2Farenheit(currentInput)
    }
    // if (celsius < 0) {
    //     display("weatherMessage")
    // }
    var output = inputHappened(kelvin,celsius,farenheit);
    display( output );
    // var feeling = weatherMessage(celsius);
    // display(feeling)
    });


    var display = function( data ){
    var output = document.querySelector('#output');
    output.innerText = data;
    }
    var display2 = function( data2 ){
        var feeling = document.querySelector('#weatherMessage');
        output.innerText = data2;
        }
var inputHappened = function(kelvin,celsius,farenheit){
    return farenheit + ' F = ' + celsius + ' C = ' + kelvin + 'K';
};
var weatherMessage = function(celsius){
    if (40 > celsius < 0) return "ooh it's cold out";
        if (40 <= celsius < 100) return "ooh it's hot out";
        else {
            return "your literally boiling"
        }
    };