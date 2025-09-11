let rect = document.querySelector('.rect');
    rect.addEventListener('mousemove' , function(e){
        let rectLocation = rect.getBoundingClientRect();
        let rectVal = e.clientX - rectLocation.left;
        if(rectVal < rectLocation.width/2){
           let redcolor = gsap.utils.mapRange(0 , rectLocation.width/2 ,
            255 , 0 , rectVal);
            gsap.to(rect , {
                backgroundColor : `rgb(${redcolor} ,0 , 0)`,
            });
        }else{
            let greencolor = gsap.utils.mapRange(rectLocation.width/2 , rectLocation.width ,
                0 , 255 , rectVal);
                gsap.to(rect , {
                    backgroundColor : `rgb(0 , ${greencolor} , 0)`,
                });
        }
    })
rect.addEventListener('mouseleave' , function(e){
    gsap.to(rect , {
        backgroundColor : 'white',
    });
})
 window.addEventListener('mousemove' , function(e){
    let xVal = gsap.utils.mapRange(0 , window.innerWidth , 100 + rect.getBoundingClientRect().width/2 ,window.innerWidth - (100 + rect.getBoundingClientRect().width/2) , e.clientX)
    gsap.to(".rect" , {
        left : xVal,
    })
    let yVal = gsap.utils.mapRange(0 , window.innerHeight , 100 + rect.getBoundingClientRect().height/2 ,window.innerHeight - (100 + rect.getBoundingClientRect().height/2) , e.clientY)
    gsap.to(".rect" , {
        top : yVal,
    })
 })