
const rel = document.getElementById("rel");
const btn = document.querySelector(".btn")

btn.addEventListener("click" , (e)=> {
    e.stopPropagation();
    let friend = rel.getAttribute("data-friend");
    if(friend === "no") {
        rel.textContent = "Friend"
        rel.style.color = "green"
        btn.textContent = "Remove"
        rel.setAttribute("data-friend" ,"yes")
    } else {
        rel.textContent = "Stranger"
        rel.style.color = "red"
        btn.textContent = "Add Friend"
        rel.setAttribute("data-friend" ,"no")
    }
})