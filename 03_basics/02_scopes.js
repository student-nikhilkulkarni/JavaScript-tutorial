//var c =300

//the values written outside this if scope is called global scope

let a = 400

if (true){
let a = 10
//the value written inside if scope is called block scope
const b= 20
// console.log("Inner:", a)
}
//{} //is called scope 



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const usename = "Nikhil"

    function two(){
        const website = "Youtube"
        // console.log(usename);

    }
    //console.log(website);

    two()
}

//one()

if (true){
    const username = "nikhil"
    if(username === "nikhil"){
        const website = " youtube"
        // console.log(username + website);
        
    }
   // console.log(website);
    
}
//console.log(username);

// **************** Intresting ****************************//


console.log(addone(5));
  //in this function we have not stored function in a variable so we can execute without initialization or declaration
function addone(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){ //if we store the function in a variable we cannot execute without initialization or declaration
    return num + 2
}
