const clock = document.querySelector(".clock");
//let date = new Date();

//console.log(date.toLocaleTimestring());
setInterval(function(){
     let date = new Date();
     clock.innerHTML = date.toLocaleTimeString();
 }, 1000);