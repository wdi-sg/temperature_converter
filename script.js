console.log("hello script js");


function fromF(inputf){
  tempInF = parseInt(inputf)
  tempInC = Math.round((tempInF - 32) * 5 / 9);
  tempInK = Math.round((tempInF - 32) * 5 / 9 + 273.15);
  return tempInC+"C or, "+tempInK+"K";
  
};

function fromC(inputc){
  tempInC = parseInt(inputc)
  tempInF = Math.round((tempInC * 9 / 5) + 32);
  tempInK = tempInC  + 273.15;
  return tempInF+"F or, "+tempInK+"K";
};

function fromK(inputk){
  tempInK = parseInt(inputk)
  tempInF = Math.round((tempInK - 273.15) * 9 / 5 + 32);
  tempInC = Math.round(tempInK - 273.15);
  return tempInC+"C or, "+tempInF+"F";
};

function checkWeather(celcius){
	if(celcius<0){
		return "ooh, its cold out"
	} else if(40<celcius<100){
		return "ooh, its hot out"
	} else {
		return "your literally boiling"
	}
}

function attire(celcius){
	console.log(tempInC)
	console.log(celcius)
	if(celcius < -10){
		return "heavy jacket and toe warmers"
	} else if (0 <= celcius && celcius < 40 ) {
		return "normal clothing"
	} else {
		return "your birthday suit"
	}
}

const state = {
	current : 0,
	inputName: 0,
	inputDegrees : 1, 
	inputType : 2,
}

console.log(state.current);