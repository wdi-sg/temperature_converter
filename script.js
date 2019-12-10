"use strict"
console.log("hello script js");

// variable for amount of inputs
let inputAmount = 0;
let unit
let degree

var inputHappened = function (currentInput) {
  // first input
  if (inputAmount === 0) {
    degree = parseInt(currentInput)
    inputAmount++
    document.querySelector('#input').setAttribute("placeholder", "Celsius/Fahrenheit/Kelvin")

    if (currentInput < 0) {
      return `Oooooh it might be cold out!`
    } else if (currentInput > 40 && currentInput <= 100) {
      return `ooooooh it might be hot out!`
    } else if (currentInput > 100) {
      return `you might literally be boiling!`
    } else {
      return `seems like it could be a nice day`
    }

    // second input
  } else if (inputAmount === 1) {
    unit = currentInput
    document.querySelector('#input').setAttribute("placeholder", "Your Name please")

    if (currentInput === "Celsius") {
      let output = `${degree}°C = ${9/5*degree+32}°F = ${degree + 273}°K`
      inputAmount++
      return output
    } else if (currentInput === "Fahrenheit") {
      let output = `${degree}°F = ${5/9*(degree-32)}°C = ${5/9*(degree + 32)}°K`
      inputAmount++
      return output
    } else if (currentInput === "Kelvin") {
      let output = `${degree}°K = ${9/5*(degree-273)+32}°F = ${degree - 273}°C`
      inputAmount++
      return output
    }

    // third input
  } else if (inputAmount === 2) {
    // reset input placeholder and input amount to rerun everything
    inputAmount = 0
    document.querySelector('#input').setAttribute("placeholder", "input temperature!")

    if (degree < 0) {
      return `${currentInput}, please dont go outside if you want to live`

    } else if (degree > 40 && degree <= 100) {
      switch (unit) {
        case "Celsius":
          return `${currentInput}, you should wear swimwear, or maybe nothing, or maybe, just maybe, enter a cold storage`
        case "Fahrenheit":
          return `${currentInput}, could be cold, could be hot. Toughen up, buttercup!`
        case "Kelvin":
          return `${currentInput}, let's just say.... it is cold`
      }

    } else if (degree > 100) {
      switch (unit) {
        case "Celsius":
          return `${currentInput}, you should wear swimwear, or maybe nothing, or maybe, just maybe, enter a cold storage`
        case "Fahrenheit":
          return `${currentInput}, either you melt, or you die. Show your skin`
        case "Kelvin":
          return `${currentInput}, let's just say.... it is cold, or very hot`
      }

    } else {
      switch (unit) {
        case "Celsius":
          return `${currentInput}, most likely you will need to wear a sweater`
        case "Fahrenheit":
          return `${currentInput}, do you want to build a snowmaaaaannn?`
        case "Kelvin":
          return `${currentInput}, human extinction is on the way.`
      }
    }
  }
}