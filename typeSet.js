// let i = 5 + "2";
// // console.log (i)
// const myObj = {};
// const str = "myString";
// const rand = Math.random();
// const anotherObj = {};

// // Create additional properties on myObj
// myObj.type = "Dot syntax for a key named type";
// myObj["date created"] = "This key has a space";
// myObj[str] = "This key is in variable str";
// myObj[rand] = "A random number is the key here";
// myObj[anotherObj] = "This key is object anotherObj";
// myObj[""] = "This key is an empty string";

// console.log(myObj);
// // {
// //   type: 'Dot syntax for a key named type',
// //   'date created': 'This key has a space',
// //   myString: 'This key is in variable str',
// //   '0.6398914448618778': 'A random number is the key here',
// //   '[object Object]': 'This key is object anotherObj',
// //   '': 'This key is an empty string'
// // }
// console.log(myObj.myString); 
let user = {
    name: "Devesh",

}

let admin ={
    role: "Master",
}

admin.__proto__ = user
console.log(admin.name)