function saymyName(){

console.log("N");
console.log("I"); 
console.log("K");
console.log("H"); 
console.log("I");
console.log("L");
 
}

//saymyName() 

//using this function method we can calculate after giving the numbers
// function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
//      let result =number1 + number2
//      return result     //nothing can be printed after result in function
       return number1 + number2
}


//addTwoNumbers("4",8)
//addTwoNumbers(4,"8")
//addTwoNumbers("4","8")
const result = addTwoNumbers(3,5)

//console.log("Result:",result);

function loginUserMessage(username){ //sometimes (username  ="sam") can be used then its value is taken and after passing parameter it can be overwrite
      if(username === undefined)// if(!username) both work similar with (!) not operator
      {
           // console.log("Please enter a username");//without return down return will also execute
            return  //with this return no function will execute
      }
      return `${username} just logged in`
}
//loginUserMessage("Nikhil") //here function return the value but doesnot print anything

//console.log(loginUserMessage("Nikhil"))
//console.log(loginUserMessage())

//********************************continue function***************** */

function calculatecartprice(val1, val2, ...num1){ //... represent spread operation which group together all items
      return num1
}

console.log(calculatecartprice(200,400,500, 2000));


const user ={
      productname: "book",
      price: 20

}

function handleobject(anyobject){
      console.log(`productname is ${anyobject.productname} and price is ${anyobject.price}`);
      
}

//handleobject(user)

handleobject({
      productname: "book",
      price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
      return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


