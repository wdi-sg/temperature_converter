const temps = {
    fahr: null,
    cels: null,
    kelv: null,
}
let getName = null;
let getTemp = null;
let getUnit = null;

const askName = () => {
    getName = prompt("What's your name?");
    if (!getName) {
        getName = 'stranger';
    }
}

const askTemp = () => {
    getTemp = parseFloat(prompt(`Howdy ${getName}, what is the temperature right now?`));
    while (!getTemp) {
        getTemp = parseFloat(prompt('Sorry, but you need to enter a number. Please try again.'));
    }
}

const askUnit = () => {
    getUnit = prompt('And what unit is it in? Please type f(ahrenheit), c(elsius), or k(elvin).');
    while (!(getUnit == 'f' || getUnit == 'c' || getUnit =='k')) {
        getUnit = prompt('Sorry, but you need to enter either f, c, or k.')
    };
    getUnit == 'f' ? temps.fahr = getTemp :
        getUnit == 'c' ? temps.cels = getTemp :
        temps.kelv = getTemp
}

const tempConv = () => {
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

const giveResult = () => {
    getTemp = prompt(`It's ${temps.cels}°C, equivalent to ${temps.fahr}°F, which is equivalent to ${temps.kelv}K.
                Would you like to convert more temperatures? If yes, enter a number, if not, enter anything.`);
}

const convMainLoop = () => {
    askName();
    askTemp();
    while (parseFloat(getTemp)) {
        getTemp = parseFloat(getTemp);
        temps.kelv = null;
        temps.fahr = null;
        temps.cels = null;
        getUnit = null;
        askUnit();
        tempConv();
        giveResult();
    };
    alert(`See you later, ${getName}!`);
}

convMainLoop();