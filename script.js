//prompt user for inputs
var temperature = prompt('What temperature LAAAA?');
var temperatureUnit = prompt('Which unit LAAAA?');

//declare global vars for each temperature
var farenheitTemp;
var celciusTemp;
var kelvinTemp;

//declare functions for each conversion
//function f to c
var fToC = function() {
	celciusTemp = ((parseInt(temperature)-32)*(5/9));
	return celciusTemp
};
// fToC();

//function f to k
var fToK = function() {
	kelvinTemp = ((parseInt(temperature)+459.67)*(5/9));
	return kelvinTemp
};
// fToK();

//function c to f
var cToF = function() {
	farenheitTemp = ((parseInt(temperature)*(9/5))+32);
	return farenheitTemp
};
// cToF();

//function c to k
var cToK = function() {
	kelvinTemp = ((parseInt(temperature)+273.15));
	return kelvinTemp
};
// cToK();

//function k to c
var kToC = function() {
	celciusTemp = ((parseInt(temperature)-273.15));
	return celciusTemp
};
// cToK();

//function k to f
var kToF = function() {
	farenheitTemp = ((parseInt(temperature)*(9/5))-459.67);
	return farenheitTemp
};
// kToF();


// console conversion logs
var kelvinConversionLog = function() {
	console.log(temperature + '\xB0 K = ' + farenheitTemp + '\xB0 F = ' + celciusTemp + '\xB0 C');
};

var celciusConversionLog = function() {
	console.log(temperature + '\xB0 C = ' + farenheitTemp + '\xB0 F = ' + kelvinTemp + '\xB0 K');
};	

var farenheitConversionLog = function() {
	console.log(temperature + '\xB0 F = ' + kelvinTemp + '\xB0 K = ' + celciusTemp + '\xB0 C');	
};		

//console all logs

var kelvinLogs = function() {
		kToF();
		kToC();
		kelvinConversionLog();
};

var celciusLogs = function() {
	cToK();
	cToF();
	celciusConversionLog();
};

var farenheitLogs = function() {
	fToK();
	fToC();
	farenheitConversionLog();
};


//switch statement

switch(temperatureUnit) {
	case 'kelvin':
		kelvinLogs();
		break;
	case 'k':
		kelvinLogs();
		break;
	case 'Kelvin':
		kelvinLogs();
		break;
	case 'K':
		kelvinLogs();
		break;
	case 'celcius':
		celciusLogs();
		break;
	case 'celcius':
		celciusLogs();
		break;
	case 'c':
		celciusLogs();
		break;
	case 'Celcius':
		celciusLogs();
		break;
	case 'C':
		celciusLogs();
		break;
	case 'farenheit':
		farenheitLogs();
		break;	
	case 'f':
		farenheitLogs();
		break;	
	case 'Farenheit':
		farenheitLogs();
		break;	
	case 'F':
		farenheitLogs();
		break;	
	default: console.log('Hey, that"s not a unit silly!');
};


