
const rect = document.getElementById("rect");

rect.addEventListener("mousemove", (e) => {
    let mouseLoc = e.clientX;
    let rectDetail = rect.getBoundingClientRect();
    let rectMouseLoc = mouseLoc - rectDetail.left;

    if (rectMouseLoc < rectDetail.width / 2) {
        rect.style.backgroundColor = `rgb(${254 - rectMouseLoc}, 0 , 0 )`
    } else {
        console.log("right");
        rect.style.backgroundColor = `rgb(0 , 0 , ${rectMouseLoc - 254} )`
    }
})

rect.addEventListener("mouseleave", (e) => {
    rect.style.backgroundColor = "black"
})




