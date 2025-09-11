console.log('hello');

let head = document.querySelector('#head')
let mybox = document.querySelector('#mybox');
mybox.addEventListener('mouseover' , function(event){
    event.target.style.backgroundColor = 'red'
});
mybox.addEventListener('mouseout' , function(event){
    event.target.style.backgroundColor = 'purple'
});

let Btn = document.querySelector("#Btn");
Btn.addEventListener('click' , function(event){
    head.textContent = 'aditya kumar'
});

Btn.addEventListener('click' , function(event){
     mybox.style.backgroundColor = 'purple'
});
