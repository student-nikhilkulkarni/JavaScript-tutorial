//browser me jo global object hai wo hai window object
const user = {
    username: "nikhil",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "nikhil"
//     console.log(this.username);//it will give undefined
    
// }
//chai()


// const chai = function(){
//     let username  = "nikhil"
//     console.log(this.username);
    
// }

const chai = () => {
    let username  = "nikhil"
    console.log(this);
    
}
chai()



///////// * arrow function *///////

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//if we use return keyword then it is called explicit return

// const addTwo = (num1, num2) =>  num1 + num2 // this is called implicit return without {} and return keyword

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"nikhil"})
console.log(addTwo(3, 4));


// const myArray = [2, 3, 4, 5, 6]
// myArray.forEach()