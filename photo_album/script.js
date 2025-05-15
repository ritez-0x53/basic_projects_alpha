
const elem = document.getElementsByClassName("elem");
const image = document.querySelector(".elem img")

Array.from(elem).forEach((val)=> {
    
    val.addEventListener("mouseenter" , ()=> {
        val.children[1].style.opacity = 1 ;
    })
    val.addEventListener("mousemove" , (e)=> {
        val.children[1].style.left = e.x+"px";
    })
    val.addEventListener("mouseleave" , ()=> {
        val.children[1].style.opacity = 0 ;
        val.children[1].style.left = 0 ;
    })
})


// elem.addEventListener("mouseenter" ,(e)=> {
//     image.style.opacity = 1;
// })
// elem.addEventListener("mousemove" ,(e)=> {
//     image.style.left = e.x+"px";
//     // image.style.top = e.y+"px";
// })
// elem.addEventListener("mouseleave" ,(e)=> {
//     image.style.opacity = 0;
// })

