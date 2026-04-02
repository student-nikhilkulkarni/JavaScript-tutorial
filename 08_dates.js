//Dates

let myDate = new Date()
// console.log(myDate.toString());//Thu Apr 02 2026 17:21:49 GMT+0000
// console.log(myDate.toDateString());//Thu Apr 02 2026
// console.log(myDate.toISOString());//2026-04-02T17:21:49.949Z
// console.log(myDate.toJSON());//2026-04-02T17:21:49.949Z
// console.log(myDate.toLocaleDateString());//4/2/2026
// console.log(myDate.toLocaleString());//4/2/2026, 5:21:49 PM
// console.log(myDate.toLocaleTimeString());//5:21:49 PM
// console.log(typeof myDate ); //Date is always an (object) in JavaScript

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023 here 0 is consitered as starting month january in JS when it is written in single value 

//let myCreatedDate = new Date(2023,0,23,5,3)
//console.log(myCreatedDate.toString());//Mon Jan 23 2023 05:03:00 GMT+0000

let myCreatedDate = new Date("2024-01-26")
//console.log(myCreatedDate.toLocaleString());//1/26/2024, 12:00:00 AM Here 01 Is considered as january monrh and follows

//TimeStamp is used to create polls and quizes.

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1775151530130 it is the time in milliseconds from 1st Jan 1970 to 2 Apr 2026
// console.log(myCreatedDate.getTime());//1775151679366 - 1706227200000 the difference between these values give th time 
//console.log(Math.floor(Date.now()/1000));//1775151931 it is the time in seconds

let newDate = new Date()
console.log(newDate.getMonth()+1);//return month value 0 as Jan so +1 is added
console.log(newDate.getDay());//return day value start with monday as 1

//`${newDate.getDay()} and the time is ` string interpolation method

newDate.toLocaleDateString('default',{
    weekday: "long"            
})// we can costamize the date with this type of methods 







