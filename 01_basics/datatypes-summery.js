//primitive

//7 types: String, Number, Boolean, null, undefined, 
// Symbol, BigInt

//We will not define type in Js 
const score = 100
const scorevalue = 10.3// here 100 type as int is not defined
// JS is Dynamically typed language.

const isLoggedIn = false
const outsideTemp = null
let userEmail; //here it is undefined

const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id === anotherid)

const bignumber = 1234567890
//console.log(typeof bignumber);

//Reference (Non primitive)

//Array, Objects, Functions

const heros =["shaktiman", "spiderman", "antman"]
 let myObj = {
    name:"nikhil",
    age: 21
}

const myFunction = function(){
    console.log("hello world!");
}

console.log(typeof null);

//Type of operator
//undefined => "undefined"
//Null => "object"
//Boolean => "boolean"
//Number => "number"
//String => "String"
//object => "object"
//function => "function"
//Symbol => "symbol"
//object =>"function" for native or host