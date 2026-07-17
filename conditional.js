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

const year = 2028;
if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    console.log("This is leap year")
}
else {
    console.log(" Not Leap Year")
}

// Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".
const speed = 200;
if (speed > 80) {
    console.log("Over speed")
}
else {
    console.log("Normal speed")
}

// Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).
const age = 34;
const hasTicket = false;
if (age > 18 && hasTicket) {
    console.log("Entry Allowed")
}

// Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).

const isWeekend = true;
const isHoliday = false;
if (isWeekend && isHoliday) {
    console.log("No work today")
}
else {
    console.log("Go to work")
}
// Build a simple login system — print "Login successful" only if both username and password are correct.
const userName = "Sahil";
const password = 12345;
if (userName === "Sahil" && password === 12345) {
    console.log("LOGIN SUCCESSFUL")
}
else {
    console.log("Invalid name or password")
}
// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).
// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).
// Using age and hasID, use nested if-else to check whether someone is eligible to vote.
// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".