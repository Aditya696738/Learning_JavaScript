const body = document.querySelector("body");
// body.style.backgroundColor = "yellow"
const buttons = document.querySelectorAll(".button");
buttons.forEach(function(button) {
    button.addEventListener("click", function(e){
        if(e.target.id === 'red'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'violet'){
            body.style.backgroundColor = e.target.id;
        }
      
    })
});
