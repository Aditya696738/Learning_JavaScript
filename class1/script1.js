//fdiv.innerHTML = "heee!!!!!!";


//select an element by its id and className//------------

//let element = document.querySelector("#sclass");
//console.log(element);
//
//let xxx = document.querySelector("#sdiv");
//console.log(xxx);



/// TO ADD AN ELEMENT BY APPENT METHOD//

let rPara = document.createElement("p");
rPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis fugit ab impedit quas distinctio vitae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit a assumenda autem molestiae omnis et! Aspernatur laudantium hic, neque ipsum vitae, porro commodi a nulla asperiores facere labore? Veniam consequuntur facere non natus minus provident quidem molestiae, unde optio! Dicta! ";
let bodyTag = document.querySelector("body");
bodyTag.appendChild(rPara);