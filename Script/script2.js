// setTimeout()
// 1
// setTimeout(() => {
//     console.log('aditya')
// }, 2000);
// 
// // 3
// const myFunction = function(){
//     console.log('hello aditya !')
// }
// setTimeout(myFunction , 2000);

// some concept about objects

// const descriptor = Object.getOwnPropertyDescriptor(Math ,'PI')
// console.log(descriptor)
// 
// Object.defineProperty(descriptor , 'value',{
//     value:4,
//     writable:true,
// });
// console.log(Object.getOwnPropertyDescriptor(Math ,'PI'));
// 

/* unction short_Name(name , maxLen) {
    if (name.length > maxLen) {
        return name.substring(0 , maxLen) + '...'
    }
    return name
}

let Name = short_Name('adityakuamr ' , 4);
console.log(Name); */

function shortName(name , maxLength){
    if(name.length > maxLength){
        return name.substring(0 , maxLength) + '***'
    }
    return name;
}
let user = shortName('Adityakumar' , 5);
console.log(user);
