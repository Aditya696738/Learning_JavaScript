//let myBox = document.getElementById("myBox");
//
//myBox.addEventListener("click" , function(event){
//    event.target.style.backgroundColor = "tomato"
//    event.target.textContent = "Don't again 🦇"
//});


//document.querySelector("#myBox").addEventListener("click" , function(e){
//    e.target.style.backgroundColor = "tomato"
//   e.target.textContent = "Don't again 🦇"
//});
//
//
//let Button = document.querySelector("#modeButton");
//Button.addEventListener("click" , e =>{
//    alert('Button was clicked');
//}); 

//------------------TOGGLE BUTTON------------->>>>>>>>>>>>>>>>>>>

let modeButt = document.querySelector("#modeButton");
//let body = document.querySelector("body");
let currMode = "light";

modeButt.addEventListener('click' , (e) =>{
    if(
        currMode === "light"){
            currMode = "dark";
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
        }
        else{
            currMode = "light";
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
        }
}); 