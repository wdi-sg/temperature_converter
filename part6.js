var temperature = prompt("What is the temperature in Degrees?");
var temperatureUnit = prompt("What temperature unit? kelvin/celsius/fahrenheit *case sensitive")
var userName = prompt("What is your name?");
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


temperature = parseFloat(temperature);

if(temperatureUnit === "kelvin"){
    var celsius = temperature - 273;
    var fahrenheit = celsius*9/5 + 32;
    var temps = [celsius, temperature , fahrenheit];
}else if(temperatureUnit === "celsius"){
    var kelvin = temperature + 273;
    var fahrenheit = 9/5*temperature + 32;
    var temps = [temperature, kelvin , fahrenheit];
}else{
    var celsius = 5/9*(temperature-32);
    var kelvin = celsius + 273;
    var temps = [celsius, kelvin , temperature];
}
var i;
for( i=0 ; i<3 ; i++){
    if(i===0){
        var x = "C";
    }else if(i===1){
        var x = "K";
    }else if(i===2){
        var x = "F";
    }

alert(temps[i] +" " + x);
}

if (temperature<0){
    alert("ooh it's cold out");
}else if(temperature>40&&temperature<=100){
    alert("ooh it's hot out");
}else if(temperature>100){
    alert("your literally boiling");
}

if(temperature<0||temperature>100){
    alert(clothes[7]);
}else if(temperature>=0&&temperature<20){
    alert("wear " + clothes[6]);
}else if(temperature>=20&&temperature<30){
    alert("wear " + clothes[4]);
}else if(temperature>=30&&temperature<40){
    alert("wear " + clothes[2]);
}else if(temperature>=40&&temperature<=100){
    alert("wear " + clothes[0]);
}

