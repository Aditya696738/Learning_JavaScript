// terniary operator//---------

// const Teaprice = 100
// Teaprice >= 80 ? console.log("more than 80"):console.log("less then 80"); 

// syntax of terniary operator--
// any value;
// condition ? true value : false value; 

// nullish coalescing operator------------------- 

// let userName = "aditya";
// age = null??10
// console.log(userName);
// console.log(age);

 // truthy or falsy cases--------------------

// const userEmail = "xxx@gmail.com";
// if(userEmail){
//   console.log("user have own email ID");
// }
// else{
//   console.log("user have dont own email ID")
// }

// const user1Email = "";
// if(user1Email){
//   console.log("user have own email ID");
// }
// else{
//   console.log("user have dont own email ID")
// }
 
// checking of empty array or object----------

// const myArray = [2, 4, 5, ];
// if(myArray.length === 0){
//     console.log("array is empty")
// }
// else{
//     console.log("not a empty array")
// }

// const myObject = {
//     // keys:value
//        userName:"aditya",
//        age:23,
//        email:"axjc@gmail.com"
// };
// if(Object.keys(myObject).length === 0){
//     console.log("object is empty")
// }
// else{
//     console.log("not a empty object")
 // }

// switch case statement-------------------------------
// const month = 0
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("may");
//         break;
//     case 5:
//         console.log("april");
//         break;
//     default:
//         console.log("it show the correct month")
//         break;
// }

// const priceOFItem = 999
// switch (priceOFItem) {
//     case 400:
//             console.log("price of item is medium");
//         break;
//     case 550:
//             console.log("price of item is accurate");
//         break;
//     case 999:
//             console.log("item is too costly");
//         break;
//     default:
//         //function getAvg(num1, num2, num3, num4, num5) {
//         //    const getAvg = (num1, num2, num3, num4, num5)/2;
//         //    console.log("avg:" , getAvg);
//         //}
//         //getAvg(299, 488, 546, 699, 7985);
//         console.log("default value")
//         break;
// }

// Control flow ------------- how the programe execute or control the order of execution of code..

// const price = 599
// if(price >= 500){
//     const power = "flying"
//     //console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);// output is error because code was executed on out of block scope..

// const price = 9
// if(price === 9){
//     const price1 = 10
//     console.log(`predicted value:${price1}`);
// }
// // console.log(`predicted value:${price1}`);

// const Price = 9
// if(Price === 9){
//     var Price2 = 10
//     //console.log(`predicted value:${Price2}`);
// }

// concept of controlflow using if else cause with objects .. here it is exmaple which is created by me....!!!!!!... 
// const xObject = { 
//     userName:"Aditya",
//     age:20,
//     wt:65,
//     email:"xx12@gmail.com"
// }
//  console.log(xObject);
//  console.log(xObject.userName);

// if(xObject.userName === "Aditya" ){  
//     const power = "lightining"
//     fightingSkill = "advanced"
//     var power1 = "flying" 
//     console.log(`user power:${power}`);
//     console.log(`user fightingSkill:${fightingSkill}`);
//     //console.log(`user power1:${power1}`);
// }
// console.log(`user power1:${power1}`);

// const UserloggedIn = true
// debitcard = true
// loogedInfromGoogle = true
// loggedInfromEmail = false
// if(UserloggedIn && debitcard && 3 === 3){
//     console.log("allow to buy something");
// }
// if(UserloggedIn || debitcard || loggedInfromEmail || loogedInfromGoogle){
//    console.log("user logged in");
// }

 //IIFE(immeditely invoked function expression)-----------------
 //syntax: (function expression) (function equation)
// (function start(){
//    console.log('database is connected');
// })(); // 1.if we not use(;) then output is error 2. if we run two IIFE the we must use (;) otherwise output is error
// 
// (()=>{
//    console.log("I'm the mern stack developer");
// })()

//  (function one(){
//     console.log("node environment is setup")
//  })();
//  (function two(){
//     console.log("backend api is ready")
//  })();
//  (function third(){
//     console.log("frontend created on react")
//  })();
//  (function fourth(){
//     console.log("database  is connected")
//  })();
//  (function fifth(){
//     console.log("app is ready for production")
//  })();
//  
// ((Name)=>{
//     console.log(`${Name}`)
// })("aditya");
  
// object de-structure 

// const user = {
//     Name : "aditya",
//     age : 23,
// }
// const{Name , age} = user;
// console.log(Name);
// console.log(age);
// 
// const course = {
//     courseName : "javascript",
//     price : 999,
//     courseInstructor : "aditya"
// }
// const{courseInstructor : Instructor} = course; // de-structuring
// console.log(Instructor , course.courseName , course.price);

// array with object...
// const xArray = [ {
//     Name : "Aditya",
//     emailId : "xyzpqr@gmail.com",
//     age : 23
// },{
//     skill : "fullstack web development, system desgin, devOps, DSA(c++)",
//     framwork : "Node.js , Express.js",
//     database: "mongoDB , mySQL"
// },{
//     language : "c++ , javascript , python",
// }];
// console.log(xArray[2]);
// console.log(xArray[1].skill);
// console.log(xArray[0]);

