// var tempinFahr = prompt ("Enter temp in Fahrenheit")
// var tempInCent = (tempInFahr-32)*5/9;
// var tempInKelvin= (tempInCent + 273.15);
// var fahr= (tempInCent+32)*9/5
// var temp
// console.log("temp in cent is" + " " + tempInCent);
// console.log("temp in Kelvin is" + " " + tempInKelvin);

var temp= prompt ("Enter a temp ");
var num= parseInt(temp)
var type= prompt ("Enter type - F,  C or K");


if (type=="F") {
	console.log(num+ "F" + "=" + ((num-32)*5/9) + "C" +"=" + (((num-32)*5/9)+273.15) + "K");
}; 
if (type=="C") {
	console.log (num+ "C" + "=" + ((num+32)*9/5) + "F" + "=" + (num + 273.15) +"K");
};
if (type=="K") {
	console.log(num + "K" + "=" + ((num-273.15)*9/5 + 32) + "F" + "=" + (num-273.15) +"C")
};


