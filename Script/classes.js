console.log('Hello aditya')

// class User{
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}89_xxx`
//     } 
//     UserName(){
//         return`${this.username.toUpperCase()}`
//     }
//     Email(){
//         return`${this.email}`
//     }
// }
// const user = new User('Aditya_123','aditya123@gmai.com','aditya@123')
// console.log(user.encryptPassword());
// console.log(user.UserName());
// console.log(user.Email());


// Behind the scene of classes

function User(username , email , password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.UserName = function(){
     return`${this.username}`
}
User.prototype.Email = function(){
     return`${this.email}`
}
User.prototype.Password = function(){
     return`${this.password}`
}
const tea = new User('adity@123' , 'aditya@gmail.com' , 'xxxx_1234');

console.log(tea.UserName());
