let sliderdiv = document.querySelector("#sliders");
let imgcontainers = document.querySelector(".image-containers");
let images = document.querySelectorAll("img");


const prev = document.querySelector("a:first-of-type")
const next = document.querySelector("a:last-of-type")
let currentslide = 0 ;

images.forEach((img) => {
    img.style.width = sliderdiv.clientWidth + "px"
});

imgcontainers.style.width = imgcontainers.clientWidth * images.length + "px"


window.onload = () =>{
    imgcontainers.style.transform = " translateX(-" + sliderdiv.clientWidth * (currentslide + 1) +"px)";
    currentslide ++ ;
}

prev.onclick = (e)=> {

    e.preventDefault();
    if(currentslide === 1){
        imgcontainers.style.transition="none"
        currentslide = Number(images.length - 1);
    }else imgcontainers.style.transition = "all 1s";


    // imgcontainers.style.transition = "all 0.5s"
    imgcontainers.style.transform = "translateX(-" + sliderdiv.clientWidth *(currentslide-1) +"px)";
    currentslide--;

    // if(currentslide === 0 ) prev.style.display = "none"
    // else next.style.display = "inline-block"
}

next.onclick = (e) => {

    e.preventDefault();

    if(currentslide === Number(images.length - 2)){
        imgcontainers.style.transition="none"
        currentslide = 0 ;
    }else imgcontainers.style.transition = "all 1s";

    // imgcontainers.style.transition = "all 0.5s"
    imgcontainers.style.transform = " translateX(-" + sliderdiv.clientWidth * (currentslide + 1) +"px)";
    currentslide++;
    
    // if(currentslide === images.length - 1 ) next.style.display = "none"
    // else prev.style.display = "inline-block"
}

// imgcontainers.transitionend = () => {
    
// }

imgcontainers.addEventListener ("transitionend" , () => {

            

})



