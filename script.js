let temps = {
    fahr: null,
    cels: null,
    kelv: null,
}
let getName = null;
let getTemp = null;
let getUnit = null;

function askName() {
    getName = prompt("What's your name?");
    if (!getName) {
        getName = 'stranger';
    }
}


function askTemp() {
    getTemp = prompt(`Howdy ${getName}, what is the temperature right now?`);
    checkTemp();

}

function checkTemp() {
    getTemp = parseFloat(getTemp);
    if (!getTemp) {
        getTemp = prompt('Sorry, but you need to enter a number. Please try again.');
        checkTemp();
    } else {
        askUnit();
    }
}

function askUnit() {
    getUnit = prompt('And what unit is it in? Please type f(ahrenheit), c(elsius), or k(elvin).');
    checkUnit();
}

function checkUnit() {
    if (!getUnit || !(getUnit == 'f' || getUnit == 'c' || getUnit == 'k')) {
        getUnit = prompt('Sorry, but you need to enter either f, c, or k.');
        checkUnit();
    } else if (getUnit == 'f') {
        temps.fahr = getTemp;
        tempConv();
    } else if (getUnit == 'c') {
        temps.cels = getTemp;
        tempConv();
    } else {
        temps.kelv = getTemp;
        tempConv();
    }
}

function tempConv() {
    if (temps.fahr) {
        temps.cels = (temps.fahr - 32) * (5 / 9);
        temps.kelv = temps.cels + 273.15;
    } else if (temps.cels) {
        temps.fahr = (temps.cels * (9 / 5)) + 32;
        temps.kelv = temps.cels + 273.15;
    } else {
        temps.cels = temps.kelv - 273.15;
        temps.fahr = (temps.cels * (9 / 5)) + 32;
    }
}

function giveResult() {
    getTemp = prompt(`It's ${temps.cels}°C, equivalent to ${temps.fahr}°F, which is equivalent to ${temps.kelv}K.
                Would you like to convert more temperatures? If yes, enter a number, if not, enter anything.`);
                console.log(getTemp);
    if (parseFloat(getTemp)) {
        getTemp = parseFloat(getTemp);
        temps.kelv = null;
        temps.fahr = null;
        temps.cels = null;
        getUnit = null;
        askUnit();
        giveResult();
    } else {
        alert(`See you later, ${getName}!`);
    }

}

askName();
askTemp();
giveResult();