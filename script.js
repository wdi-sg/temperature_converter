var userInput = prompt('Input temperature unit (Type D, F or K)');
var userInputt = prompt('Input temperature value');
var answer = 0;
var answer2 = 0;

if (userInput === 'D') {
    answer = (userInputt * 9/5 + 32);
    answer2 = (userInputt * 1 + 273.15);
    alert(answer + "F");
    alert(answer2 + "K");
} else if (userInput === 'K') {
    answer = (userInputt - 273.15 * 9/5 + 32);
    answer2 = (userInputt - 273.15);
    alert(answer + "F");
    alert(answer2 + "deg");
} else if (userInput === 'F') {
    answer = (userInputt - 32 * 5/9);
    answer2 = (userInputt - 32 * 5/9 + 273.15);
    alert(answer + "deg");
    alert(answer2 + "K");
} else {
    alert('Invalid values were detected.');
}