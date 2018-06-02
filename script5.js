
// document.getElementById('submit').addEventListener('click', play);
// document.getElementById('button').addEventListener('click', stop);


// play();
// function play () {
// 	var STARTING_TEMP = prompt("What's the temp today? OR stop!");

// 	if (STARTING_TEMP != "stop") {
// 		STARTING_TEMP = parseInt(STARTING_TEMP);
// 		var temperatureUnit = prompt("What unit would you like to use?");

// 		var temps = [];

// 		if (temperatureUnit == "fahrenheit") {
// 			var fah = STARTING_TEMP;
// 			var deg = ((STARTING_TEMP-32)*5/9);
// 			var kel = ((STARTING_TEMP-32)*5/9) + 273.15;

// 			temps.push(fah, deg, kel);

// 			console.log(deg);
// 			console.log(kel);
// 			console.log(fah);

// 		} else if (temperatureUnit == "celsius") {
// 			var fah = (STARTING_TEMP*9/5)+32;
// 			var deg = STARTING_TEMP;
// 			var kel = STARTING_TEMP + 273.15;

// 			temps.push(fah, deg, kel);

// 			console.log(deg);
// 			console.log(kel);
// 			console.log(fah);

// 		} else if (temperatureUnit == "kelvin") {
// 			var fah = ((STARTING_TEMP-273.15)*9/5)+32;
// 			var deg = STARTING_TEMP = 273.15;
// 			var kel = STARTING_TEMP;

// 			temps.push(fah, deg, kel);

// 			console.log(deg);
// 			console.log(kel);
// 			console.log(fah);
// 		};

// 		for (var i = 0; i < 3; i++) {
			
// 			console.log('r-'+i);
// 			console.log(document.getElementById('r-'+i));
// 			document.getElementById('r-'+i).innerHTML = temps[i];

// 		};

// 		setTimeout(function () {
// 				console.log("hrllo");
// 				play();
// 			}, 1000);
// 	} else{
// 		alert('yay! We stopped!');
// 	};
// };


var STARTING_TEMP = "hllo";
while(STARTING_TEMP != "stop") {
	STARTING_TEMP = prompt("What's the temp today?");

	var temps = [];

	STARTING_TEMP = parseInt(STARTING_TEMP);
	var temperatureUnit = prompt("What unit would you like to use?");
	// alert(temperatureUnit);

	if (temperatureUnit == "fahrenheit") {
		var fah = STARTING_TEMP;
		var deg = ((STARTING_TEMP-32)*5/9);
		var kel = ((STARTING_TEMP-32)*5/9) + 273.15;

		temps.push(fah, deg, kel);

		alert(deg + "deg" + kel + "kel" + fah + "fah");
		// console.log(kel);
		// console.log(fah);

	} else if (temperatureUnit == "celsius") {
		var fah = (STARTING_TEMP*9/5)+32;
		var deg = STARTING_TEMP;
		var kel = STARTING_TEMP + 273.15;

		temps.push(fah, deg, kel);

		console.log(deg);
		console.log(kel);
		console.log(fah);

	} else if (temperatureUnit == "kelvin") {
		var fah = ((STARTING_TEMP-273.15)*9/5)+32;
		var deg = STARTING_TEMP = 273.15;
		var kel = STARTING_TEMP;

		temps.push(fah, deg, kel);

		console.log(deg);
		console.log(kel);
		console.log(fah);
	}

	for (var i = 0; i < 3; i++) {
		
		console.log('r-'+i);
		// console.log(document.getElementById('r-'+i));
		document.getElementById('r-'+i).innerHTML = temps[i];
		console.log(temps[i]);

	}

	var check = prompt('do you want to stop? yes/no');
	if( check == 'yes') {
		STARTING_TEMP = 'stop';
	} else {
		continue;
	}
}