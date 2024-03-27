const sliderContainer = document.querySelector(".container");
const innerslider = document.querySelector(".slider");
const  images = ["assets/images-1.jpg","assets/images-2.jpg","assets/images-3.jpg","assets/images-4.jpg"];

const events={
    mouse:{ down: "mousedown", move: "mousemove", up:"mouseup"},
    touch:{ down:"touchstart", move:"touchmove", up:"touchend"}
}

let deviceType='';

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        deviceType="touch";
        return true;
    }
    catch(e){
        deviceType="mouse";
        return false;
    }
}

function slideGenerator() {
   images.forEach(image=>{
    const slide= document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML=`<img src='${image} class='image'>`;
   })

   innerslider.computedStyleMap.gridTemplateColums= `repeat(${images.length},lfr)`;
}
