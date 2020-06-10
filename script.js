console.log("hello script js");


function convertFan(currentInput){
  console.log(currentInput);
  //fan to others
  let fan = currentInput;
  let fanToCel = (fan - 32) * 5/9;
  let fanToKel = (fan - 32) * 5/9 + 273.15;
  let output = fan + "°F = " + fanToCel + "°C = " + fanToKel + "K";
  return output;
}

function convertCel(currentInput){
  console.log(currentInput);
  //cel to others
  let cel = currentInput;
  let celToFan = (cel * 9/5) + 32;
  let celToKel = (cel * 1) + 273.15;
  let output = cel + "°C = " + celToFan + "°F = " + celToKel + "K";
  return output;
}

function convertKel(currentInput){
  console.log(currentInput);
  //kel to others
  let kel = currentInput;
  let kelToCel = kel - 273.15;
  let kelToFan = (kel - 273.15) * 9/5 + 32;
  let output = kel + "K = " + kelToCel + "°C = " + kelToFan + "°F";
  return output;
}

function buttonClicked(){
  var currentInput = document.getElementById('input1').value;
  console.log(currentInput);
  var name = document.getElementById('input2').value;
  console.log(name);
  var tempUnit = document.getElementById('tempUnit').value;
  console.log(tempUnit);
  var originalTemp = parseFloat(currentInput);
  if (tempUnit === "cel"){
    if (originalTemp <= 0){
      displayMsg("it is so cold, " + name + " please wear something warm");
    } else if (originalTemp > 0 && originalTemp < 40){
      displayMsg("it is normal, " + name + " please wear something");
    } else if (originalTemp >= 40 && originalTemp < 100){
      displayMsg("it is so hot, " + name + " please wear something cooling");
    } else if (originalTemp >= 100){
      displayMsg("it is boiling, " + name + " please do not go out at all");
    }
    return convertCel(originalTemp);
  } else if (tempUnit === "fan"){
    if (originalTemp <= 32){
      displayMsg("it is so cold, " + name + " please wear something warm");
    } else if (originalTemp > 32 && originalTemp < 104){
      displayMsg("it is normal, " + name + " please wear something");
    } else if (originalTemp >= 104 && originalTemp < 210.2){
      displayMsg("it is so hot, " + name + " please wear something cooling");
    } else if (originalTemp >= 210.2){
      displayMsg("it is boiling, " + name + " please do not go out at all");
    }
    return convertFan(originalTemp);
  } else if (tempUnit === "kel"){
    if (originalTemp <= 273.15){
      displayMsg("it is so cold, " + name + " please wear something warm");
    } else if (originalTemp > 273.15 && originalTemp < 313.15){
      displayMsg("it is normal, " + name + " please wear something");
    } else if (originalTemp >= 313.15 && originalTemp < 373.15){
      displayMsg("it is so hot, " + name + " please wear something cooling");
    } else if (originalTemp >= 373.15){
      displayMsg("it is boiling, " + name + " please do not go out at all");
    }
    return convertKel(originalTemp);
  }
};

function displayMsg(msg){
  const msgText = document.createElement('p');
  msgText.innerText = msg;
  document.body.appendChild(msgText);
};