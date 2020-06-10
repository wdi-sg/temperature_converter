
function tempConverter(x, y) {
    let celsius = 0;
    let kelvin = 0;
    let fahrenheit = 0;
    if (x.toString().match(/[0-9]/)) {
       if (y === 'Fahrenheit') {
           celsius = parseFloat(((x - 32)*5/9).toFixed(2));
           fahrenheit = x;
           kelvin = parseFloat((celsius + 273.15).toFixed(2));
       }
       else if (y === 'Celsius') {
           celsius = x;
           fahrenheit = parseFloat((celsius*9/5 - 32).toFixed(2));
           kelvin = x + 273.15;
       }
       else if (y === 'Kelvin') {
           celsius = parseFloat((x - 273.15).toFixed(2));
           fahrenheit = parseFloat((celsius*9/5 - 32).toFixed(2));
           kelvin = x;
       }
    }
    else return "ERROR: We expect a number, sir."; //if the input isn't a number, it ends here

    let temperatures = `It is currently ${celsius}°C, ${kelvin}K, or ${fahrenheit}°F`;
    if (celsius <= 0) return temperatures + ' We do not recommend you leave the house.';
    else if (celsius <= 100 && celsius > 40) return temperatures + ' Staying inside will be more comfortable.';
    else if (celsius > 100) return temperatures + ' There is only death outside, sir. But if you must.';
    else return temperatures;

}
