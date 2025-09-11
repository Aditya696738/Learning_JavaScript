// bigInt 
let a = 122334353155252452n
let b = 14453153553135n
let c = 131313224
let result = a * b;
//console.log(result);

// let num = result + BigInt(c);
//console.log(num);


// logical operator 
let num1 = 6;
let num2 = 16;
let cond1 = num1 > num2;
let cond2 = num1 == num2;

//console.log('cond1 && cond2' , cond1 && cond2);

// ternary operator 
const shirtPrice = 999;
 //shirtPrice >= 999? console.log('shirt is costly'): console.log('shirt is cheap');

// conditional operator
// et Num = 25;
// f(Num % 5 === 0){
//    console.log(Num ,'is divisible by 5')
// else{
//    console.log(Num , 'is not divisible by 5');
// 

// loops
// 1) for loop
// let sum = 0;
// for (let i = 1; i<=99; i++) {
//     sum = sum + i;
// }
//console.log('sum = ', sum);


// let number = 2;
// for (let i = 1; i <= 10; i++) {
//     number = number * i;
// }
//console.log(number);

// 2) while loop

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++ ;
// }

// array 

// let fruits = ['apple' , 'litchi' , 'mango' , 'oranges' , 'jackfruit'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);

// looping over an array
// let number = [1,2 ,3, 4, 5, 6,7];
// for (let i = 1; i < number.length; i++) {
//     console.log(i);
// }

// for of loop
// let nagar = ['abc' , 'pqr' , 'xyz' , 'tuv' , 'mnc'];
// for (const element of nagar) {
//     console.log(element);
// }

// const number = [87 , 56 , 89 , 34 , 88];
// let sum = 0;
// for (const value of number) {
//     sum = sum + value;
// }
// let avg = sum/number.length;
// console.log(`avg marks of student is ${avg}`);

// example 2

// const Price_Of_Items = [999 , 345 , 599 , 499];
// for (let i = 0; i < Price_Of_Items.length; i++) {
//     let offer = Price_Of_Items[i]/10;
//     Price_Of_Items[i] = Price_Of_Items[i] - offer
// }
// console.log(`discounted price of every items ${Price_Of_Items}`);
// 
// console.table(Price_Of_Items);

// array method 

// 1) push method 
// let food_Items = ['roti' , 'dal' , 'chawal' , 'sabji' , 'chatni'];
// food_Items.push('chips' , 'pizza' , 'pasta');
// console.log(food_Items);

// 2) pop method
// let food_Items = ['roti' , 'dal' , 'chawal' , 'sabji' , 'chatni'];
// food_Items.pop();
// console.log(food_Items);

// to string 
// let food_Items = ['roti' , 'dal' , 'chawal' , 'sabji' , 'chatni'];
// console.log(food_Items.toString());


// let family_Cars = ['alto' , 'swift' , 'desire' , 'innova'];
// let super_Cars = ['ferrari' , 'supra' , 'nissan GTR' , 'audi' ,  'nano' , 'sumo' , 'peginni'];
// 
// let Car_Collection = super_Cars.concat(family_Cars);
// console.log(Car_Collection);
// 
// let Cars = family_Cars.slice(0 , 2);
// console.log(Cars);

// splice method
// let arr = ['I' , 'am' , 'learning' , 'a' , 'language' , 'which' , 'is known' , 'as' , 'javascript'];
// 
// arr.splice(8 , 1 , 'DSA');
// console.log(arr);

// function 

// function aFunction(){
//     console.log('hello')
// }
// aFunction();

// function xCounting(){
//     for (let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// }
// xCounting();

// return function

// function sumFunc(a , b){
//     let sum = a + b;
//     return sum;
// }
// let ans = sumFunc(123 , 345);
// console.log(ans);
// 
// // arrow function
// 
// const myFunction = (a,b,c) =>{
//     let sum = a + b + c;
//     return sum;
// }
// let sum = myFunction(234 , 456 , 986);
// console.log(sum);
// 
// const aFunction = (a , b ,c) =>{
//     let getMultiplication = a * b* c;
//     return getMultiplication;
// }
// let multi = aFunction(3535 , 423 , 34);
// console.log(`the result of multiplication is ${multi}`);

//  REDUCE , MAP & FILTER in array

// let aArray = [10 , 20 , 30 , 40 , 50 , 60 , 70];
// 
// console.log(aArray.reduce((acc , curr) =>{
//     return acc + curr;
// } , 0));
// 
// 
// let price_Of_Itemes = [999 , 299 , 399 , 623];

// const totalPrice = price_Of_Itemes.reduce(function(acc , curr){
//     console.log(`acc:${acc} and curr:${curr}`);
//     return acc + curr;
// } , 0)
// 
// console.log(totalPrice);

// console.log(price_Of_Itemes.reduce((acc , curr)=>{
//     return acc + curr;
// } , 0))
// 
// const food_Items = ['pasta' , 'roti' , 'rice' , 'juice'];

// console.log(food_Items.reduce((acc , curr)=>{
//    return acc + curr;
// })) // ------> reduce method is not work properly in string in array so don't use


// MAP 

// const numbers = [10 , 20 , 30 , 40 , 50];
// console.log(numbers.map(num => num *3));

// filter
//example 1
const book_Collection = [
    {Book_name : 'Invinsible', type_of_book : 'horror',
        edition : 'revised(1999)' , price : 299
    },
    {Book_name : 'Behind_the_door', type_of_book : 'horror',
        edition : 'latest' , price : 499
    },
    {Book_name : 'Behind_the_blackhole', type_of_book : 'sci-fi',
        edition : 'latest-edition' , price : 599
    },
    {Book_name : 'Eye_on_space', type_of_book : 'sci-fi',
        edition : '2024-25' , price : 999
    },
    {Book_name : 'first_meeting', type_of_book : 'drama',
        edition : 'latest-2024' , price : 199
    },
    {Book_name : 'Benifites_of_healthy', type_of_book : 'fitness',
        edition : 'revised(2013-15)' , price : 499
    },
    {Book_name : 'diet_plan', type_of_book : 'fitness',
        edition : 'latest_edition' , price : 99
    },
];
let user_book = book_Collection.filter((bk) => bk.type_of_book === 'sci-fi');
// console.log(user_book);

// for each loop 

// const myArray = [11,22,33,44,55,66,77,88];
// myArray.forEach((value , index)=>{
//     console.log('number :' , value ,'and' , 'index :', index);
// })
// 
// // array with function 
//  const pArray = [11,22,33,44,55,66,77,88,10,20,30,40,50];
//  function getSum(pArray){
//     let sum = pArray.length;
//     for (let i = 0; i < pArray.length; i++) {
//         sum = sum + pArray[];
//         
//     }
//     return sum;
//  }
//  let totalSum = getSum(pArray);
//  console.log(totalSum);

// CALL STACK AND HOISTING
//greet(); // --------> it pushes error in this case because we acessing it before initializing ;
// const greet = ()=>{
//     console.log('hello aditya !')
// }
// greet();

// console.log(value);//----> it shows undefined.
// const value = 25;
// console.log(value);

// hoisting in function declearation..

// in case of hoisting in function, function logic is shifted and its create an imeginary {}.
//{
//    myName();
//    function myName(){
//        console.log('aditya is a web developer')
//    }
//}

// functional callstack 
//function greetMe(greet , fullname){
//    console.log('hello' , fullname);
//    greet();
//}
//function greet(){
//    console.log('i am good')
//}
//greetMe(greet , 'aditya kumar');// LIFO (last in first out)

// example 2
//function get_sum(a,b){
//    return a + b;
//}
//function find_avg(a,b){
//    return get_sum(a,b)/2;
//}
//let p = find_avg(23 , 78);
//console.log(p);

// SCOPING...
//function xxx(){
//    const value = 5;
//    console.log(value);
//}
//xxx();
//console.log(value); // output error becoze value is not define out of the scope.


// CLASSES  

//class x_Human{
//    name = 'mr. x'
//    Ht = '5ft'
//    #Ht = '5ft' //-- it shows ht is hidden or private.
//    wt = 90 
//
//    walking(){
//        console.log('yes I am walking');
//    }
//    running(){
//        console.log('No I am walking' , this.Ht);
//    }
//}
//
//// let p = x_Human();  // it is not envoked without using 'new' //keyword
//let p = new x_Human();
//p.walking();
//console.log(p.name);
//console.log(p.Ht);

//class xyz_Obj{
//    userName = 'Aditya kumar'
//    user_Age = 24
//    user_Id = 'aditya123@'
//
//    greet(){
//        console.log(`here I am ' my name is ${this.userName} and my userId is ${this.user_Id}`);
//        //console.log(`here I am ' my name is ${userName} and my userId is ${user_Id}`);
//    }
//
//    get Fetchuser_Age(){
//        return this.user_Age;
//    }
//    set user_Age(age){
//        this.user_Age = age;
//    }
//}
//const User = new xyz_Obj();
//User.greet();
//console.log(User.userName);
//console.log(User.user_Age);
//User.user_Age = 34;
//console.log(User.user_Age);

// EXAMPLE 3

// area of circle
/*class circle{
    constructor(radius){
         this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }
}
const Area_of_Circle = new circle(7/4);
console.log(Area_of_Circle.getArea());*/

// volume of cylinder
/*class cylinder{
    constructor(radius , height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        return Math.PI * this.radius * this.radius * this.height;
    }
}
const volume_of_cylinder = new cylinder(45 , 20);
console.log(volume_of_cylinder.getVolume())*/

// DYNAMICALLY NATURE OF OBJECTS

/*const person = {
    name : 'aditya' , age : 24 , user_Id : 'aditya@123'
}
function Skill(language , framework){
    this.language = language;
    this.framework = framework;
}
const my_Skill = new Skill('javascript' , 'react')
console.log(my_Skill.framework);
console.log(my_Skill.language);
console.table(person);*/

// adding and modifying an element of objects at runtime;

/*person.city = 'dhanbad';
person['state'] = 'jharkhand';
console.log(person)
delete my_Skill.framework;
console.log(my_Skill.framework);*/

// DEFAULT PARAMETERS
/*function my_Name(name = 'aditya'){
    console.log(name);
}
my_Name();

function x_name(name){
    return{name};
}
console.log(x_name('aditya'));*/

// OBJECTS DE-STRUCTURING & JSON API 

/*const x_Objects = {
    name : 'aditya kumar',
    skill : 'full stack development , system design , DSA',
    language : 'javascript , c++',
    age : 24,
    user_Id : 'aditya_123@'
};

const{user_Id , skill} = x_Objects;

console.log(user_Id);
console.log(skill)*/


/*const software_Developer = {
    user_Id : ' Aditya_kum123',
    age : 24,
    user_Name : {
        fname : 'Aditya',
        lname : 'kumar'
    },
    Skill : {
    skill : 'full stack development , system design , DSA , DevOPS',
    language : 'javascript , c++',
    framework : 'React',
    database : 'Mysql , mongoDB'
    },

};

const {user_Name :{fname , lname} , Skill} = software_Developer;
console.log(fname , lname);
console.log(Skill);*/


// SPREAD AND ASSIGN operator

/*const obj1 = {
    x : 'abc' , y : 'pqr'
}
const obj2 = {
    z : 'stu' , w : 'mno'
}

const obj3 = {...obj1 , ...obj2};
console.log(obj3)
const obj4 = Object.assign(obj1 , obj2);
console.log(obj4)*/

/*function calculate_cart_Price(val1 , val2 , ...num1){
   return num1
}
console.log(calculate_cart_Price(200 , 300 , 400 , 100));*/

//FUNCTION WITH OBJECTS

/*const data_OF_Person = {
    user_Id : 'Aditya_kum123',
    user_Name : 'Aditya kumar'
}
function person_Object(anyObject){
    console.log(`Name of the person is ${anyObject.user_Name} and Id is ${anyObject.user_Id}`)
}
person_Object(data_OF_Person);*/

// FUNCTION WITH ARRAY
/*const xArray = ['a','b','c','d','e','f','g','h','i','j','k'];
function value(getArray){
    return getArray[1];
}
console.log(value(xArray));*/

// SCOPE

/*function one(){
    const user_Name = 'aditya kumar'

    function two(){
        const code_Editor = 'VS code'

        console.log(user_Name);
    }
    //console.log(code_Editor);

    two();
}
one();*/


/*if(true){
    const user_Name = 'aditya kumar'

    if(user_Name === 'aditya kumar'){
        const website = 'you tube'
        console.log(website);
    }
    //console.log(website);
}
//console.log(user_Name);*/

//ASYNC
/*setTimeout(function(){
    console.log('aditya kumar')
}, 2000)

const hello = function(){
   console.log('my name is aditya kumar')
}
setTimeout(hello , 2000);*/


//PROMISE
//const PromiseOne = new Promise(function(resolve , reject){
//    setTimeout(function(){
//        console.log('Async task is completed');
//        resolve();
//    } , 2000);
//})
//
//PromiseOne.then(function(){
//    console.log('promise consumed');
//});

//const PromiseTwo = new Promise(function(resolve , reject){
//   setTimeout(() => {
//       resolve({user_Name : 'aditya kumar' , age : 24})
//   }, 2000);
//);
//romiseTwo.then(function(user){
//   console.log(user);
//);

// WEATHER DATA

/*function weather_Data(city){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            const weather = Math.random();
            if(weather){
                resolve({
                    city : 'dhanbad',
                    temperature : 33,
                    condition : 'Mostly cloudy'
                });
            }
            else{
                reject('weather data is not fetch');
            }
        } , 2000);
    });
}
weather_Data('city').then(function(data){
    console.log(`weather in ${data.city} is ${data.temperature} and ${data.condition}`);
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('weather data is fetched');
});*/

/*const fetchUserData = ()=>{
    return new Promise((reslove , reject)=>{
        setTimeout(() => {
            const error = true;
            if(!error){
                reslove({
                    userName : 'Aditya kumar',
                    userAge : 22
                });
            }else{
                reject('ERROR : Unable to fetch user data');
            }
        }, 3000);
    })
}
fetchUserData().then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch((ERROR)=>{
    console.log(ERROR)
}).finally(()=>
    console.log('the promise is resloved')
);*/

/*const fetchUserdate = function(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            let userData = true;
            if(userData){
                resolve({
                    userName : 'Aditya kumar',
                    userAge : 21 ,
                    userId : 'aditya@123',
                    userEmail : 'adityaxxkumar@gmail.com'
                });
            }else{
                reject('ERROR');
            }
        });
    });
}
fetchUserdate().then((user)=>{
    console.log(user);
    return user.userEmail;
}).then((userName)=>{
    console.log(userName);
}).catch((ERROR)=>{
    console.log(ERROR)
}).finally(()=>{
    console.log('userData is either fetch or reject');
});*/
   
// Q. 1 Merging two arrays of data fetched from seprate API's into a single list.

/*const dataFROMfirstAPI = [{
    userName : 'Aditya kumar',
    email : 'aditya12134kumar@gmail.com',
    userID : 'aditya@123',
    gender : 'male',
}];
const dataFROMsecondAPI  = [{
    userName : 'pinki kumari',
    email : 'pinki9876kumari@gmail.com',
    userID : 'pinki_234',
    gender : 'female',
}]; 

const mergingdataFromtwodifferentAPI = [...dataFROMfirstAPI , ...dataFROMsecondAPI]; 

console.log(mergingdataFromtwodifferentAPI);*/

// M 2 
/*const dataFROMfirstAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}
const dataFROMsecondAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}
const mergedData = async () => {
    const [data1 , data2] = await Promise.all([dataFROMfirstAPI() , dataFROMsecondAPI()]);
    const mergedData = [...data1 , ...data2];
    return mergedData;
}
mergedData().then((mergedData) =>{
    console.log(mergedData)
});*/

// Q.2 combined promise
/*function asynchronousOperation(){
    let firstPromise = new Promise(function(resolve , reject){
      setTimeout(()=>{
        let error = false
        if(!error){
          resolve({
            userInfo : {
              Name : 'Aditya kumar',
              id : 'aditya_123',
              age : 21,
            },
          });
        }else{
          reject('404 : ERROR was found')
        }
      } , 2000)
    });
    let secondPromise = new Promise(function(resolve , reject){
      setTimeout(()=>{
        let error = false
        if(!error){
          resolve({
            userSkill : ['fullstack development , C++ , javascript , DevOps , cloud , systemdesign']
          });
        }else{
          reject('Promise was not consumed')
        }
      } , 2000)
    });
    let combinedPromise = Promise.all([firstPromise, secondPromise]); 
    return combinedPromise;
  }
  async function loggingData() {
    try {
        const data = await asynchronousOperation();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  loggingData();*/

// Q.3 Mapping over an array of user data to create a list of user cards ?

 /*const listOfusers = [{
     username : 'xyz',
     age : 100
 }]
 let updatedlistOfusers = listOfusers.map((listOfusers)=>{
     return `<div><h1>${listOfusers.username}</h1><h3>${listOfusers.age}</h3></div>`;
 })
 console.log(updatedlistOfusers);*/

// Q.4 Grouping an array of objects by a specific property ? (e.g grouping users by role) 
/* const users = [{
     name : 'Ramu',
     age : 99,
     role : 'admin'
 },{
     name : 'kalu',
     age : 78,
     role : 'admin'
 },{
     name : 'nagu',
     age : 45,
     role : 'user'
 },{
     name : 'madhu',
     age : 35,
     role : 'user'
 }]
 let obj = {};
 users.forEach((admin)=>{
     if(obj[admin.role]){
         obj[admin.role].push(admin);
     }else{
         obj[admin.role] = [];
         obj[admin.role].push(admin);
     }
 });
 console.log(obj);*/

// FETCH 
// example 1
/* async function fetchData() {
     try {
         const userResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
         let data = await userResponse.json();
         console.log(data);
     } catch (error) {
         console.log('404 : erroe was found' , error);
     }
 }
 fetchData();*/

// example 2
 //method using POST
 /*fetch('https://jsonplaceholder.typicode.com/posts' ,{
     method : 'POST',
     headers : {
         'content-Type' : 'application/json'
     },body : JSON.stringify({
         title : 'fefevg3g3rwrw',
         body : 'jfdijd',
         userId : 'xyz_1213@'
     })
 }).then((response)=>{
     return response.json()
 }).then((data)=>console.log(data)).catch((error)=>console.log(error));*/

// example 3
/* async function fetchUserData(){
     try {
         let response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
             method : "GET",
             headers : {
                 ContentType : 'Application/json',
                 Authorization : 'Bearer YOUR_TOKEN_HERE',
                 ContentHeaders : 'CustomValue'
             }
         });
         let data = await response.json();
         console.log(data);
     } catch (error) {
         console.log('404 : erroe was found' , error);
     }
 }
 fetchUserData();*/

// example 3
/*async function fetchUserData(){
   try {
       let response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
           method : "POST",
           headers : {
               ContentType : 'Application/json',
               Authorization : 'Bearer YOUR_TOKEN_HERE',
               ContentHeaders : 'CustomValue'
           },body : JSON.stringify({
              title : 'xxx',
              body : 'data',
              userId : '123'
           })
       });
       let data = await response.json();
       console.log(data);
   } catch (error) {
       console.log('404 : erroe was found' , error);
   }
}
fetchUserData();*/

// example 4
 /*fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
     console.log(response.headers.get('ContentType'))
     if(response.headers.get('ContentType').includes('application/json')){
         return response.json();
     }else{
         throw new Error("unexpected content type");
     }
 }).then((data)=>console.log(data)).catch((error)=>console.log(error))*/


 
 //Object Oriented Programming

//POLYMORPISHM
 /*class rice{
     raw(){
         console.log('rice is uncooked');
     }
 }
 class dal{
     cooked(){
         console.log('dal is cooked');
     }
 }
 const meal1 = new rice();
 const meal2 = new dal();
 meal1.raw();
 meal2.cooked(); */

//ENCAPSULATION
/* class bankAccount{
   constructor(name , balance){
     this.name = name;
     this._balance = balance;
   }
   getBalance(){
     return this._balance;
   }
   deposite(amount){
     if(amount>0){
       this._balance += amount;
     }
   }
   withdraw(amount){
     if(amount>0 && amount <= this._balance){
       this._balance -= amount
     }
   }
 }
 const person = new bankAccount('pinky' , 10010);
 person.deposite(0);
 person.withdraw(1000);
 console.log(person.getBalance());*/

// PROTOTYPE
/* const member = ['aalo' , 'pyaj' , 'bhindi' , 'tamatar'];
 const price = {
   aalo : 20,
   pyaj : 50,
   bhindi : 60,
   tamatar : 30,
 
   getaaloprice : function(){
     console.log(`aalo ka daam hai ${this.aalo}`);
   }
 }
 Object.prototype.jankari = function(){
   console.log('sabji ka jankari diya hua hai');
 }
 price.jankari();
 console.log(price.getaaloprice());
 member.jankari();*/

// EXAMPLE 2
/* let userName = 'adityakumar'
 String.prototype.trueLength = function(){
     console.log(`${this}`)
     console.log(`true length of string is ${this.trim().length}`);
 }
 userName.trueLength();
 'jnvjwenvwjnvj'.trueLength();*/

//INHERITANCE
/* const teacher = {
     makevideo : 'true',
     makeAssignment : function(){
         console.log('assignment is ready')
     }
 }
 const teachingSupport = {
     available : 'true',
     topic : 'javascript'
 }
 Object.setPrototypeOf(teacher , teachingSupport);
 console.log(teacher.makevideo);
 teacher.makeAssignment();*/

// CALL AND THIS IN JAVASCRIPT
/* function SetUsername(username){
     this.username = username;
 }
 function createUser(username , email , password){
     SetUsername.call(this,username)
     this.email = email,
     this.password = password
 }
 createUser.prototype.displayInfo = function(){ 
     console.log(`Username: ${this.username}, Email: ${this.email}`); 
 };
 const person = new createUser('chai' , 'abcdefgh@gmail.com' , 131334)
 console.log(person);
 person.displayInfo()*/

/* const user1 = {
     name : 'Aditya kumar',
     email : 'abcdef@gmail.com',
     greet : function(){
         console.log(`Hello my Name is ${this.name} and my Email is ${this.email} or my postion is ${this.position}`);
     }
 }
 const user2 = {
     name : 'aditya',
     email : 'abcdef@gmail.com',
     position : 'senior developer at google'
 }
 user1.greet.call(user2);
 Object.setPrototypeOf(user1,user2);*/


// EXAMPLE 3
/* function printArguments(){
     const arg = Array.prototype.slice.call(arguments);
     console.log(arg);
 }
 printArguments(1,2,3,4,5,6,7,8);*/

//CLASSES
/* class Person {
     constructor(name , email , password){
         this.name = name;
         this.email = email;
         this.password = password
     }
     encryptPassword(){
         return `${this.password}xxxxxx`
     }
 }
 const user = new Person('aditya' , 'abcd123@gmail.com' , '256442');
 console.log(user.encryptPassword());
 console.log(user.name);*/

// BEHIND the scene
/* function user(name , email , password){
     this.name = name;
     this.email = email;
     this.password = password
 }
 user.prototype.encryptPassword = function(){
     return `${this.password}xxxx`
 
 }
 user.prototype.Email = function(){
     return `${this.email}`
 }
 const person = new user('aditya' , 'abcd123@gmail.com' , '256442');
 console.log(person.encryptPassword());
 console.log(person.name);
 console.log(person.Email());*/


// INHERITANCE
/* class user{
     constructor(username){
         this.username = username;
     }
     logMe(){
         console.log(`username is ${this.username}`)
     }
 }
 class admin extends user{
     constructor(username,email , password){
         super(username);
         this.email = email;
         this.password = password
     }
     addPerson(){
         console.log(`users is added by admin ${this.username}`)
     }
 }
 const person = new admin('aditya' , 'abcd123@gmail.com' , '256442');
 person.logMe();
 person.addPerson();
 
 const per = new user('chai');
 per.logMe();*/

// console.log(person instanceof admin);


// STATIC PROPERTY
/* class user{
     constructor(username){
         this.username = username;
     }
     logMe(){
         console.log(`username is ${this.username}`);
     }
     static createId(){   // when we use static keyword the it cancel the accesseing of that function or method where you use it.
         return `123QDES`;
     }
 }
 const person = new user('Aditya kumar');
 person.logMe();
 //console.log(person.createId());
 
 class admin extends user {
     constructor(username , email) {
         super(username);
         this.email = email
     }
     addUsers(){
         console.log(`some new users was added by ${this.username}`);
         
     }
 }
 const Admin = new admin('aditya' , 'abcd123@gmail.com');
 Admin.logMe();
 console.log(Admin.createId());*/

// NEW CONCEPT
/* const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
 console.log(descriptor);
 Object.defineProperty(Math, 'value',{
     value : 4
 })
 console.log(Object.getOwnPropertyDescriptor(Math , 'PI'))
 const drink = {
     name : 'chai',
     price : 99,
     type : 'masala-chai'
 }
 console.log(Object.getOwnPropertyDescriptor(drink , 'name'));
 Object.defineProperty(drink , 'name',{
     writable: false,
     enumerable: false
 })
 console.log(Object.getOwnPropertyDescriptor(drink , 'name'));*/

//GETTER , SETTER AND STACK OVERFLOW
/* class user{
     constructor(name , email){
         this.name = name;
         this.email = email
     }
     getEmail(){
         return this.email.toUpperCase();
     }
     getPassword(){
         console.log(`user password is 1313xsa`);
     }
     set Email(value){           //maximum call stack size exceded
         this.Email = value
     }
 }
 const person = new user('aditya' , 'abcd123@gmail.com');
 //console.log(person.getEmail());
 person.getPassword();
 person.Email = 'wqcvqv@gmail.com'
 console.log(person.getEmail());*/

//modern syntax
/* function User(email , password){
    this._email = email;
    this._password = password
    Object.defineProperty(this , 'email' ,{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email = value
        }
    })
}
 const person = new User('abcd123@gmail.com' , '13132');
 onsole.log(person);
 onsole.log(person.email);*/

// LEXICAL SCOPE
/* function outer(){
     let username = 'aditya kumar';
     console.log(username);
 }
 outer();
 console.log(username);// it throw an error beacuse ye scope ke bahar execute ho raha hai
 function outer(){
     let username = 'aditya kumar';
     function inner(){
         console.log('inner function chal gaya', username);
     }
     inner()
     console.log('outer funtion chal gaya',username); // yaha par error nahi milega becoze ye scope ke ander hai
 }
 outer();
 console.log('outer funtion chal gaya',username); // yahan error mil raha hai */

// CLOSURE
