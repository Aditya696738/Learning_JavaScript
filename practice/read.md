1) logical operator---- 
we passing two condition and define logic then the code will execute and depend on true or false condition.

let num1 = 6;
let num2 = 16;
let cond1 = num1 > num2;
let cond2 = num1 == num2;

console.log('cond1 && cond2' , cond1 && cond2);

output - cond1 && cond2 false

2) ternary operator --- 

syntax - 
condition ? true output : false output 

const shirtPrice = 999;
shirtPrice >= 999? console.log('shirt is costly'): console.log('shirt is cheap');

output - shirt is costly

3) conditional operator -------
syntax - 
condition :
if(){

}else{

};

4) Array -------

array is a collection of an item.
It is a special case of an object.
it is used for contain a multiple value in single variable.

exmple--
let fruits = ['apple' , 'litchi' , 'mango' , 'oranges' , 'jackfruit'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

output--
[ 'apple', 'litchi', 'mango', 'oranges', 'jackfruit' ]
5
litchi
i) array method
a. push method--
add element to your array.

b. pop mehtod--
delete the element from end of array list  

c. to string method
In this method you will change the array into string

d. arr.slice method--
ye array me se kuch set  of element ko print kar ke de deta hai.
original array ko change nahi karta.

e. arr.splice method--
ye original array ko change kar deta hai.
  syntax--
  arr.splice(start index , [delete count,  'item 1' , 'item 2' .......]);

agar splice method me koi action pass nahi karenge to ye slice method ki tarah kaam karega.
  
Object Oriented Programming
1. javascript ek prototype language hai na ki object Oriented ya functional. 
2. javascript me constructor function likhne ke liye * new * keyword ka use karte hain.
3. object, method aur properties ka combination hota hai.
4. constructor functionme new keyword ka use karte hi ek naya empty object ban jata hai jisko ki instance kehate hain. , function ke call hote hi sara argument ko us empty object me bhar ke de deta hai.

 PROTOTYPE 
1. javascript's behaviour is like prototype , means javascript accesss every single line of code until he find null.
2. this keyword didn't work in arrow function because of prototypla behaviour of javascript.
3. array ------ object ----- null.
4. javascript me har ek chij object hai. 
5. properties of array 🔀 properties of object 🔀 properties of string.
6. function ek function bhi hai or object bhi hai.