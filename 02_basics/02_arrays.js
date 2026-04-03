//arrays

const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//here it merges complete dc array into an array
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);//here we need to write array in an array to retrive data

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros); //here concat also return similar solution as push method

//const allHeros = marvel_heros.concat(dc_heros)//here concat return new array without overlaping like push with both arrays combination
//console.log(allHeros); //return all heros combined in a single array

//const all_new_heros = [...marvel_heros, ...dc_heros] //"..." this is called "spread operation" in which the elements are seperated  
//console.log(all_new_heros);   //spread is mostly used     // and result the complete combination of both arrays with merging into each other

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // .flst(infinity) is used to spread out multiple in line arrays into single array


console.log(Array.isArray("Nikhil"));// here we are asking question that whether given is an array or not // it returns false
console.log(Array.from("Nikhil"));// Here the given string, message is converted into an array

console.log(Array.from({name:"Nikhil"})); //interisting //here we have to specify which one should be converted into array key or value.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Here "Array.of" method is used to convert multiple data into a single array




