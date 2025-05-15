
const storyContainer = document.querySelector("#story_container");
const view = document.getElementById("view");

let data;
const xhr = new XMLHttpRequest();
xhr.open("GET" , "database/user.json" , true);
xhr.send();
xhr.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4) {
        data = JSON.parse(this.response);
        console.log(data);
        data.forEach((val,ind) => {
                storyContainer.innerHTML += `<div class="story">
                <img id=${ind} class="image" src=${val.image} alt="">
            </div>`
        });
// ====
        const story = document.querySelectorAll(".story");
       story.forEach((val)=>{
        val.addEventListener("click" , (e)=> {
            view.style.display = "block"
            view.style.backgroundImage = `url(${data[e.target.id].story})`
            view.style.transform = "scale(1)"
            view.innerHTML = `<h1>${data[e.target.id].name}</h1>`
            setTimeout(()=> {
                view.style.display ="none"
            },5000)
            
        })
       })

    } 
}