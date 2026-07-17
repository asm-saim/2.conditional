const price1 = 34;
const price2 = 56;
if (price1 == price2) {
    console.log("Equal value not data type");
}
else if (price1 === price2) {
    console.log("Equal value and equal data type")
}
else if (price1 != price2) {
    console.log("Not Equal Value")
}
else if (price1 !== price2) {
    console.log("Not Equal Value and data type")
}
else if (price1 > price2) {
    console.log("Price1 is bigger")
}
else if (price1 < price2) {
    console.log("Price2 is bigger")
}
else if (price1 <= price2) {
    console.log("Price2 is bigger or equal")
}
else if (price1 >= price2) {
    console.log("Price1 is bigger or qual")
}
else {
    console.log("Please enter a valid input")
}

//ex-2
const number1 = 5;
const number2 = 5;

if (number1 === number2) {
    console.log("value datatype equal")
}
else if (number1 == number2) {
    console.log("Value equal")
}
else {
    console.log("Invalid")
}

// Create a variable isRaining (true/false). If it is true, print "Take an umbrella".
const isRaining = true;
if (isRaining) {
    console.log("Take an umbrella")
}
else {
    console.log("put a summer cap")
}

// Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).
const stock = 1;
if (stock === 0) {
    console.log("Out of stock")
}
// Take a number variable and check whether it is positive or negative (using if-else).
const num = 0;
if (num === true) {
    console.log("true")
}
else if (num === false) {
    console.log("False")
}
else {
    console.log("Number is 0")
}
// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

const year = 2030;
if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
    console.log("This is leap year")
}
else {
    console.log(" Not Leap Year")
}


// Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".