
var msg = function (temp,output){
  const cold ="ooh it's cold outside, wear heavy jacket and toe warmers \nor a heavy jacket";
  const norm ="its a fine day, wear a jacket\n or a sweater";
  const hot ="ooh it's hot outside, you can wear shorts & shirt \n or a swimsuit";
  const boil ="you'll literally boil, you can wear nothing\n or dont go outside if you want to live";
  if (temp<0){
     output += cold}
    else if (temp>=0 && temp<=40){
      output += norm}
    else if (temp>40 && temp<=100){
      output += hot}
    else if (temp>100){
      output += boil}
    else{
       "please input a number"}
  return output;

}

// if(currentInput2)

var inputHappened = function(currentInput){
  var temp = currentInput;
  const celc = (currentInput-32) * 5/9;
  const kelv = (currentInput-32) * 5/9 + 273.15;
  let output = celc.toFixed(2) + "°C = " + kelv.toFixed(2) + "K = " + currentInput + "°F \n" ;
       return msg(temp,output);

};

// document.getElementById('Farenheit').addEventListener('click',aaa);
// document.getElementById('Celcius').addEventListener('click',bbb);
// document.getElementById('Kelvin').addEventListener('click',ccc);


var x = document.getElementById("Farenheit").checked;

// <input type="radio" name="Deg" value="Farenheit" /> Farenheit </>
//   <input type="radio" name="Deg" value="Celcius" /> Celcius </>
//   <input type="radio" name="Deg" value="Kelvins" /> Kelvins </>


