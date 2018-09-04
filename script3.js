//constants are marked with all caps)
var STARTING_TEMP;
var temperatureUnit;
var CONVERTED_TEMP_1;
var CONVERTED_TEMP_2;

var temps = [STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2];
//cant change values of variable outside of array

temps[0] = parseInt(prompt("Please enter a temperature"));
temperatureUnit = prompt("please enter the temperature unit");

//helper functions
var cToF = function(x){
	var y = (9/5)*x+32;
	return y.toString()+"F";
}
var kToF = function(x){
	var y = (9/5)*(x-273)+32;
	return y.toString()+"F";
}
var fToC = function(x){
	var y = (5/9)*(x-32);
	return y.toString()+"C";
}
var cToK = function(x){
	var y = x+273;
	return y.toString()+"K";
}
var kToC = function(x){
	var y = x-273;
	return y.toString()+"C";
}
var fToK = function(x){
	var y = (5/9)*(x-32)+273;
	return y.toString()+"K";
}


if (temperatureUnit == "C"){
	//cToK and cToF
	temps[1] = cToK(temps[0]);
	temps[2] = cToF(temps[0]);
	console.log(temps[0]+"C "+temps[1]+" "+temps[2]);
}
if (temperatureUnit == "K"){
	//kToC and kToF
	temps[1] = kToC(temps[0]);
	temps[2] = kToF(temps[0]);
	console.log(temps[0]+"K "+temps[1]+" "+temps[2]);
}
if (temperatureUnit == "F"){
	//fToC and fToK
	temps[1] = fToC(temps[0]);
	temps[2] = fToK(temps[0]);
	console.log(temps[0]+"F "+temps[1]+" "+temps[2]);
}

if(temperatureUnit == "C"){
	if(temps[0]<0){
		console.log("ooh it's cold out");
	}
	else if(40<temps[0]<100){
		console.log("ooh it's hot out");
	}
	else if(temps[0]>100){
		console.log("you're literally boiling");
	}
}