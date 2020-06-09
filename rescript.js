console.log("hello script js");

// //inputValue, selectMetrics, getName
// //
// let inputVal = document.querySelector('#inputVal');
// let metrics = document.querySelector('#inputMetric');
// let output = document.querySelector('#output');
// // let selectedMet;

// const currentInput = inputVal.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       return inputVal.value
//     }
// })

// function selectMetric(e) {
//   let selectedMet = e.target.value;
//   document.querySelector("#inTempMetric").innerHTML = `${selectedMet}`
//   return selectedMet;
// }


let metrics;
let tempVal;

function getMetrics(){
    metrics = prompt("Enter Metrics");
    metrics = metrics.charAt(0).toUpperCase()+metrics.slice(1);
    return metrics;
}

function getVal(){
    tempVal = prompt("Enter Value");
    // if (typeof(tempVal) === 'number'){
        return tempVal;
    // } else {
    //     alert("error")
    // }
}


function checkInput() {
getMetrics();
getVal();
let outputData = document.querySelector("#outputData");
// if (typeof(tempVal) == 'number') {
    if (metrics === "Celcius") {
        let cVal = tempVal;
        let fVal = (tempVal*(9/5) + 32).toFixed(2);
        let kVal = (Number(273.15)+Number(tempVal)).toFixed(2); //cant get this to add up without Number()
        let data = `${cVal} C = ${fVal} F = ${kVal} K`
        return outputData.innerText = data
    } else if (metrics === "Farenheit") {
        let cVal = ((tempVal-32)*(5/9)).toFixed(2);
        let fVal = tempVal;
        let kVal = ((tempVal-32)*(5/9)+273.15).toFixed(2);
        let data = `${cVal} C = ${fVal} F = ${kVal} K`
        return outputData.innerText = data
    } else if (metrics === "Kelvin") {
        let cVal = (tempVal-273.15).toFixed(2);
        let fVal = ((tempVal-273.15) * (9/5) + 32).toFixed(2);
        let kVal = tempVal;
        let data = `${cVal} C = ${fVal} F = ${kVal} K`
        return outputData.innerText = data
    }
// } else {
//     return outputData.innerHTML = "input valid number please"
// }
}


function getName() {
    let person = prompt("Please enter your name");
    return person;
}


function checkWeather() {
    checkInput();
    let userName = getName();
    let metricsOutput = document.querySelector("#metType");
    metricsOutput.innerText = metrics;
    let valOutput = document.querySelector("#Tval");
    valOutput.innerText = tempVal;
    let outputClothes = document.querySelector("#outputClothes");
    if ((metrics === "Celcius" && tempVal < 0) || (metrics === "Farenheit" && tempVal < 32) || (metrics === "Kelvin" && tempVal < 273.15)) {
    let msg = `ooh it's cold out; hi ${userName}, wear a heavy jacket and toe warmers`;
        return outputClothes.innerText = msg;
    } else if((metrics === "Celcius" && tempVal > 40) || (metrics === "Farenheit" && tempVal > 104) || (metrics === "Kelvin" && tempVal > 313.15)) {
        let msg = `ooh it's hot out; hi ${userName}, wear nothing`;
       return outputClothes.innerText = msg;
    } else if((metrics === "Celcius" && tempVal > 100) || (metrics === "Farenheit" && tempVal > 212) || (metrics === "Kelvin" && tempVal > 373.15)) {
        let msg = `it's literally boiling; hi ${userName}, stay home if you want to live`;
       return outputClothes.innerText = msg;
    } else {
      let msg = `its an average day; hi ${userName}, wear shorts and shirt`;
       return outputClothes.innerText = msg;
    }
}






// const button = document.querySelectorAll(".btn");
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", inputHappened)
// }

// // function display(text) {
// //     output.innerText = text;
// //     // output.innerText = `${inputTemp}`
// // }


// //to be put into button onclick fn
// function compiledInputComp(e) {
//     selectMetric(e);
//     inputHappened(currentInput);
// }