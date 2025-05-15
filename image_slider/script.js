
const images = [];
images[0] = "img/img1.jpeg"
images[1] = "img/img2.jpeg"
images[2] = "img/img3.jpeg"
images[3] = "img/img4.jpeg"
images[4] = "img/img5.jpeg"

let i = 0;
const imageTag = document.querySelector(".slideshow_elem img")
console.log(imageTag);
const pushR = document.querySelector(".push_r")
pushR.addEventListener("click", (e) => {

    if (i < images.length - 1) {
        i++;
        console.log(i);
        imageTag.src = images[i];
    } else {
        i = 0;
        imageTag.src = images[i];
    }
})

const pushL = document.querySelector(".push_l")
pushL.addEventListener("click", (e) => {

    if (i > 0) {
        i--;
        console.log(i);
        imageTag.src = images[i];
    } else {
        i = images.length - 1
        imageTag.src = images[i];
    }
})

const t = setInterval(() => {
    if (i < images.length - 1) {
        i++;
        // console.log(i);
        imageTag.src = images[i];
    } else {
        i = 0;
        imageTag.src = images[i];
    }
    console.log(t);
}, 4000)

