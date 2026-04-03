//array

const myArr = [0, 1, 2, 3, 4, 5] // arrays are resizable
const muHeros =["shaktiman", "naagraaj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]); // we can access array using its index values

//Array methods

//myArr.push(6)// push adds the value at the end in an Array
//myArr.push(7)
//myArr.pop(4) //pop removes the end vlaue in an array

//myArr.unshift(9) //this method adds the value at the start of an array
//myArr.shift() //removes the value at the start of an array

// console.log(myArr.includes(9));// includes is a questioning method which returns boolean answer(true or false)
// console.log(myArr.indexOf(4)); // indexof returns index of the given array in number

const newArr = myArr.join()//joims the values and return the numbers in string 

//console.log(myArr);
//console.log(newArr);

//slice , splice 

console.log("A", myArr);

const mynew1 =myArr.slice(1,3)//slice return the values of array in the given range where end is not included
console.log("B", myArr);
console.log(mynew1);

const mynew2 =myArr.splice(1,3)//splice manuplate the original array in the given range
console.log("C", myArr);
console.log(mynew2);






