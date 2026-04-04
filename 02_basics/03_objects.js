//singleton
//object.create // it is a constructor method to create object here singleton is used

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Nikhil",
    "Full Name": "Nikhil Kulkarni",
    [mySym]: "key1",
    age: 20,
    location: "Bengaluru",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email); //these are two methods to print object
// console.log(JsUser["email"]);//it is important
// console.log(JsUser["Full Name"]); //by using this [""] method we can access this type of methods with two variable name and space between them 
 
// console.log(typeof JsUser["mySym"]);//it provide Symbol key1
 
 JsUser.email = "Nikhil@microsoft.com"; //by using = symbol we can change data of an object
//  console.log(JsUser.email);
 Object.freeze(JsUser.email) // to freeze the value of object so that others cannot change it

 JsUser.email = "Nikhil@Chatgpt.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(JsUser.greeting); // without () it gives function
console.log(JsUser.greetingtwo()); // with () it gives undefined

//NOTE : it is important to access methods through ["name"] rather with .email method
