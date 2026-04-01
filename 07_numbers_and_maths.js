const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length); //convert number to string and return its length
//console.log(balance.toFixed(2));//return the number of fixed values after decimal to represent

const otherNumber = 23.8675
//console.log(otherNumber.toPrecision(2));//to round off the number, using next value

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//gives number with commas (en-IN) gives commas according to indian currency system

//max_value and Min_value along with Max_safe_integer

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math); //Math is a object having different properties.
//console.log(Math.abs(4)); //returns the positive number everytime
//console.log(Math.round(4.6)); //round off the decimal value
//console.log(Math.ceil(4.2)); //round off the highest value
//console.log(Math.floor(4.6)); //round off to the lowest value
//pow(0) returns square of a number 4 power is 16 
//sqrt() returns the root of a number 25 sqrt is 5
//console.log(Math.min(4, 3, 6, 2));//return minimum value from the array
//console.log(Math.max(3, 4, 7, 2)); //returns maximum value from the given array

console.log(Math.random());//return any random value between 0 and 1 (0.344563833),(0.58364442)
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1)) + min)//important to get a result random number between the given range
console.log(Math.floor(Math.random()*(max-min + 1)) + min)
console.log(Math.floor(Math.random()*(max-min + 1)) + min)

