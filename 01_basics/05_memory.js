// Stack(primitive), Heap(Non-primitive)

//stack (we get value )
let myname = "NikhilKulkarni"

let anothername = myname
anothername = "PramodKumar"

console.log(myname);//nikhilkulkarni
console.log(anothername);//pramodkumar  (as value change here in one storage only)

//heap(here we get reference)
let user1 = {
    email: "user1@google.com",
    upi: "user1@ybl"

}

let user2 = user1

user2.email = "nikhil@google.com"

console.log(user1);//nikhil@google.com (both changes as here reference is used)
console.log(user2);//nikhil@google.com