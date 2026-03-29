let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//conversion gives
//"33" => 33
//"33abc" => it gives NaN but its a number
// true =>1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn =Boolean (isLoggedIn)
//console.log(booleanIsLoggedIn);

// if 1 => true; 0=> false
//"" =>false
//"hello" => true

let num = 33

let stringnum =String(num)
//console.log(stringnum);
//console.log(typeof stringnum);

// *********** operations ************

let value = 3
let negativevalue = -value
//console.log(negativevalue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%2);


let str1 = "hello"
let str2 = " Nikhil"

let str3 = str1 + str2
//console.log(str3);

console.log(1 +"2"); //12
console.log("1" + 2); //12
console.log("2"+"2"); //22
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32  // because of
//  toprimitive guidelines of ECMA script

console.log(3 + 4 * 21 / 7); //15  this follow DMAS rule 
// to calculate
console.log(3 + 4 * 5 % 7);  //9 this also follow DMAS rule
//  and % is calculated at last 


console.log(true); //returns true
console.log(+true); //return 1 after conversion
console.log(+""); // return 0


let num1, num2, num3
num1 = num2 = num3 = 2+2

let gamecounter = 100
gamecounter++;
console.log(gamecounter); // prefix first increment then print
// postfix first print and then increment

let x =3
let y =x++
console.log(x,y); // 4, 3

let a = 2
let b =++a
console.log(a , b); // 3, 3

