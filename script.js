console.log("hello script js");

//Prompt user to enter a temp in f
var person = prompt("Please enter your name");
var prompt_temperature = alert("Please enter a temperature and select units");

//Create a var to store temp object for result
var tempObj = {
    'a':0, 'b':0
}

//add listener to monitor input element
document.querySelector('#input').addEventListener('change', function(event){
generateResult();
});

//add listener to monitor units changed
document.querySelector('#unitInput').addEventListener('change', function(event){
generateResult();
});

//get units
var units="0";

//this functions runs the calculation based on the existing inputs and displays it on screen
var generateResult = function(){
    var currentInput = document.getElementById('input').value
    // console.log("current input is:"+currentInput);

    if(isNaN(currentInput*1)){
        alert("Input needs to be a numerical value");
        return
    }
    var e = document.getElementById('unitInput');
    units = e.options[e.selectedIndex].value;

    //if any of the inputs are not there, clear display and return
    if(units=="0" || currentInput.length==0){
        display("",1);
        display("",2);
        document.querySelector("#msg").innerText="";
        document.querySelector("#rec").innerText="";
        document.querySelector('#a').innerText="";
        document.querySelector('#b').innerText="";
        return;
    }


    //send input to inputHappened function and capture output obj
    var output = inputHappened(currentInput);

    //display output object accordingly
    display( output['a'],1 );
    display( output['b'],2 );
}

//this function displays the results on screen
//display function
var display = function( data, id ){
    var output = document.querySelector('#output'+id);
    output.innerText = data;
}

//do conversion
//calculates the conversion and returns output
var inputHappened = function(currentInput){
    // console.log( currentInput );

    // console.log("Units:"+units);

    var displayA = document.querySelector('#a');
    var displayB = document.querySelector('#b');

    var temp_celcius;

    switch(units){
    case "1": //input is Fahrenheit
        tempObj['a']=(currentInput-32)*(5/9) //Celsius
        tempObj['b']=tempObj['a']+273.15; //Kelvin
        displayA.innerText='Celsius:';
        displayB.innerText='Kelvin:';
        temp_celcius=tempObj['a'];
        break;
    case "2": //input is Celsius
        tempObj['a']=currentInput*(9/5)+32 //Fahrenheit
        tempObj['b']=currentInput*1+273.15 //Kelvin
        displayA.innerText='Fahrenheit:';
        displayB.innerText='Kelvin:';
        temp_celcius=currentInput;
        break;
    case "3": //input is Kelvin
        tempObj['a']=(currentInput-273.15)*(9/5)+32 //Fahrenheit
        tempObj['b']=currentInput-273.15 //Celsius
        displayA.innerText='Fahrenheit:';
        displayB.innerText='Celsius:';
        temp_celcius=tempObj['b'];
        break;
    }

    // console.log(temp_celcius);
    var msg="";
    var rec = "Hey "+person+", ";

    if(temp_celcius<0){
        msg="Ooh it's cold out.";
        rec+="better put on some heavy jacket and toe warmers!";
    }
    else if(temp_celcius >= 0 && temp_celcius <= 40){
        if(temp_celcius<10){
            rec+="better put on a sweater.";
        }
        else if(temp_celcius<20){
            rec+="better put on a sweater + jacket."
        }
        else if(temp_celcius<30){
            rec+="better put on shorts and a t-shirt."
        }
        else {
            rec+="better put on a swimsuit."
        }
    }
    else if(temp_celcius > 40 && temp_celcius <= 100) {
        msg="Ooh it's hot out."
        rec+="better wear nothing."
    }
    else {
        msg="You're literally boiling."
        rec+="don't go outside if you want to live."
    }

    document.querySelector("#msg").innerText=msg;
    document.querySelector("#rec").innerText=rec;

    var output = tempObj
    return output;
};