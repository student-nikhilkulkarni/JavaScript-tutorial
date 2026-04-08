// object using constructor

//const tinderUser = new Object() // it is a singleton  Object
const tinderUser = {} // Its a non single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "nikh@gmail.com",
    fullname :{
        userfullname: {
            firstname: "Nikhil",
            lastname: "Kulkarni"
        }
    }
}
//console.log(regularUser.fullname.userfullname)//we can use (.) operator to access nested values

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) //.assign is used to assign and join two objects result

const obj3 ={...obj1, ...obj2} //spread method is another way to join two objects  and their result
//console.log(obj3);


const users = [
    {
        id:1,
        email: "nikhil@gmail.com"
    },
    {
        id:2,
        email: "kulkarni@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); //return the keys of tinderuser in an array format
//console.log(Object.values(tinderUser));//return the values of tinderuser in an array format

console.log(Object.entries(tinderUser)); //return the saperate key value pair in an array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //hasOwnProperty is the method that says whether it has that property or not and retuen boolean values



