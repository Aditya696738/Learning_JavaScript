// question 1

// Create a function calculator(num1, num2, operator) that takes two numbers and a string operator ('+', '-', '*', '/') and returns the result of applying that operator.

// M1
/*function Calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "division by zero";
    default:
      return 'your case is invalid';
  }
}
console.log(Calculator(10 , 20 , "/"));*/

// M2

/*function calculator(num1, num2, operator) {
  if ((operator = "+")) {
    return num1 + num2;
  } else if ((operator = "-")) {
    return num1 - num2;
  } else if ((operator = "*")) {
    return num1 * num2;
  } else operator = "/";
  return num2 !== 0 ? num1 / num2 : "division by zero";
}
console.log(calculator(1000000000, 333333333, "/"));*/

// question 2

// Write a function aggregateNumbers(arr) that receives an array of numbers and returns an object with two properties:

/* function aggregateNumbers(arr) {
  const sum = arr.reduce((acc, curVal) => {
    return acc + curVal;
  }, 0);
  const Avg = arr.length > 0 ? sum / arr.length : 0;
  return { sum, Avg };
}
console.log(aggregateNumbers([12, 23, 45, 535, 5453])); */

// question 3
// Given an array of student objects, each with properties name and grade, write a function analyzeGrades(students) that returns:
// -> The name of the student with the highest grade.
// -> The average grade of the class.

/*const students = [
  {name : 'abc' , grade : 90},
  {name : 'pqr' , grade : 88},
  {name : 'xyz' , grade : 75}
]
function analyzeGrades(students){
  let total = 0;
  let topStudent = students[0];

  students.forEach(student => {
    total += student.grade;
    if (student.grade > topStudent.grade) {
      topStudent = student;
    }
  });
  const avgMarks = total / students.length;
  return{topStudent: topStudent.name , avgMarks}
}
console.log(analyzeGrades(students));*/

// question 4

// Implement a function createCounter() that returns a function. Each call to the returned function should increment and return an internal counter that remains private.

/*function createCounter(){
  let count = 0 // internal count will be private;
  return function (){
    count += 1
    return count;
  }
}
const data = createCounter();
console.log(data()); // 1
console.log(data()); // 2
console.log(data()); // 3 */

// modification
/* function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    }
  };
}
const data = createCounter();
console.log(data.increment());
console.log(data.decrement()); */


// LEXICAL SCOPE
/* function outer(){
  let username = 'aditya kumar';
  function inner(){
    console.log('inner',username);
  }
  inner();
  function middle(){
    console.log('middle',username);
  }
  middle();
}
outer(); */
// console.log('outer',username);// it will not defined bcoze it will excute out of scope..


// CLOSURE 
/* function abc(){
  let name = 'aditya';
  function pqr(){
    console.log(name);
  }
  return pqr;
}
const func = abc();
func(); */

// qustion 5

// Write an asynchronous function fetchJoke() that retrieves a random joke from a free joke API (for example, icanhazdadjoke). Display the retrieved joke in the console and handle any errors during the fetch process...

/* async function fetchJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke",{
      headers:{
        'content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('fetching joke is failed',error)
  }
}
fetchJoke(); */  // integrate with a button...

// M2 
/* fetch('https://official-joke-api.appspot.com/random_joke',{
  headers:{
    'content-Type': 'application/json'
  }
}).then((response)=>{
  return response.json();
}).then((data)=>console.log(data)).catch((error)=>console.log(error)) */


// question 6

// Write two functions:
// 1. getEvenNumbers(arr) – Returns a new array containing only the even numbers from the input array.
// 2. doubleNumbers(arr) – Returns a new array where each number from the input is doubled using the map() function.

/* function getEvenNumbers(arr){
  return arr.filter(number => number % 2 === 0)
}

function doubleNumbers(arr){
  return arr.map(number => number*2)
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumNumbers = numbers.reduce((acc , curVal)=>{
  return acc + curVal;
} , 0)
console.log(getEvenNumbers(numbers));
console.log(doubleNumbers(numbers));
console.log(sumNumbers); */


// question 6
// Implement a Debounce Function

// Write a function debounce(func, delay) that returns a debounced version of func. The debounced function should postpone executing func until after delay milliseconds have passed since the last time it was called.

/* function debounce(func, delay){
  let timeOutID;
  return function(...arg){
    clearTimeout(timeOutID);
    timeOutID = setTimeout(() => {
      return func(...arg);
    }, delay);
  }
}
const logMessage = (query) => console.log('debounce function will execute', query);
const debouncedlog = debounce(logMessage , 3000);
debouncedlog('abc'); */

// DEBOUNCE :- function will execute with user's delay

/* function debounce(func , delay){
  let timerID;
  return function(...arg){
    clearTimeout(timerID);
    timerID = setTimeout(() => {
       return func(...arg);
    }, delay);
  }
}
const search = (query)=>{
  console.log(query);
}
const debouncedSearch = debounce(search , 2000);
debouncedSearch('JavaScript practice questions...'); */

// Trottle :- 

// question 6
/* function flattenArr(arr){
  return arr.reduce((acc , curVal)=>{
    if (Array.isArray(curVal)) {
      return acc.concat(flattenArr(curVal));
    } else {
      return acc.concat(curVal);
    }
  },[])
}
 const nestedArr = [1,2,[3,4,5,[6,7,1],1,2],4,6];
 console.log(flattenArr(nestedArr)); */

// question 7

/* const people = [{name:'xyz',age:44},{name:'abc',age:54},{name:'pqr',age:30}];

const result = people.reduce((group , person)=>{
  if(group[person.name] == null){
     group[person.name] = []
  }
  group[person.name].push(person)
  return group
} , {})
console.log(result);

const a = Object.groupBy(people , person=>person.name);
console.log(a); */


// garbage collection

/* let user = {
  name : 'aditya'
};
let admin = user;
user = null;
admin = null;
console.log(admin); */

/* let arr = [10 , 20, 34 , 442 , 44 , 53, 35];
console.log(arr.reduce((acc , cur)=>{
  return acc + cur;
} , 0));

const evenNo = arr.filter(arr=> arr % 2 === 0);
console.log(evenNo);


function sum(arr) {
  let result = arr.reduce((acc , cur)=>{
    return acc + cur;
  },0);
  return result;
}
console.log(sum(arr));*/

/* API CALL*/
