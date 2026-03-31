const name = "nikhil"
const repocount = 20

//console.log(name + "value" + repocount);

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); 
//backticks are used to write string called as string Interpolation (placeholders)

const gamename = new String ('nikhil-kulkarni-bidar') //it also provide key : value pair along with string

//console.log(gamename[0]); // result is (n) key:value
//console.log(gamename.__proto__); //It aslo provide prototypes

console.log(gamename.length); //8
console.log(gamename.toUpperCase()); // converts to uppercase (NIKHIL12) 
console.log(gamename.charAt(3)); //h
console.log(gamename.indexOf('i'));//1 its first position is returned

const newstring = gamename.substring(0,3)// substring is created
console.log(newstring);//nik  (here start is included and end is excluded)
//It will not intake negative values

const anotherstring = gamename.slice(2, 3) // slice cut the string at that positions
console.log(anotherstring);//k (not accept negative values)(here start is included and end is excluded)

const newstringtwo = "    nikhil  k"
console.log(newstringtwo);
console.log(newstringtwo.trim());//trim  eliminates extra spaces from starting and ending of string
//it also contain trimstart and trimend prototype


const url = "https://nikhil.com/nikhil%20kulkarni"
console.log(url.replace('%20','-'));//replace is used to change characters from string

console.log(url.includes('nikhil'));//includes returns true if asked exits, false if not-exists in string

console.log(gamename.split('-'));// here name is splitted and array is returned
