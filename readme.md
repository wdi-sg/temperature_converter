# Exercise: Temperature Converter

Goal: Create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.

## Setup

* Create an `index.html` file.
* Create a `script.js` file.
* Make sure to link the script file in the `index.html`.

## Specifications

### Part 1

> Your application should...

* Prompt the user for a starting `temperatureInFahr`. This should be a numerical value that represents degrees in fahrenheit.
* After receiving input it should log that same temperature in both kelvin and celsius.

### Part 2

> Your application should...

* Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
* Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius or Kelvin.
* The application should print out the user-submitted temperature in the two remaining units.
  * So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
    ```text
    32° F = 0°C = 273.15K
    ```

Using Conditionals, have your code accept either fahrenheit, celsius or kelvin, and output the other two temp types.

Define functions for each type of conversion to keep your code well-organized.

### Part 3 (Bonus I)

Use an array to store and access the user-submitted and converted temperatures. Your array will end up looking something like this...

```js
var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
```

> Note on naming convention: ALL_CAPS variable names are used to mark constants, or values which do not change over the course of a program's execution.

You should have a line of code in that resembles the first line in the example below. Convert your all of your references to `temperature` to `STARTING_TEMP` (Use CMD+D or Find & Replace to make this easier).

```js
var temperature = prompt("Enter a temperature");

// becomes

var STARTING_TEMP = prompt("Enter a temperature");
```

When you `console.log` the temperatures, make sure you do that by accessing the values stored in the array.

### Part 4 (Bonus II)

Use a for or while loop to print out the conversion results for each temperature. It's OK if you need to simplify your `console.log` statements and remove strings.  

### Part 5 (Bonus III)

Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
