
const inputEl = document.querySelector(".input_box input")
const addBtn = document.querySelector(".input_box button")
const taskContainer = document.querySelector(".task_container")

// addBtn.addEventListener("click" , (e)=> {
//     e.stopPropagation()
//     if(inputEl.value === ""){
//         return;
//     }

//     const task = document.createElement("div");
//     task.className = "task";
    
//     const taskText = document.createElement("h4");
//     taskText.textContent = inputEl.value;
    
//     const checkIcon = document.createElement("i");
//     checkIcon.className = "ri-checkbox-blank-circle-line";

//     task.addEventListener("click" , (e)=> {
//         if(checkIcon.className === "ri-checkbox-blank-circle-line"){
//             checkIcon.className ="ri-checkbox-circle-line"
//         } else {
//             checkIcon.className = "ri-checkbox-blank-circle-line"
//         }
//     })
    
//     const removeIcon = document.createElement("i");
//     removeIcon.className = "ri-close-large-fill"
    
//         removeIcon.addEventListener("click" , (e)=> {
//             taskContainer.removeChild(task);
//         })

//     task.appendChild(checkIcon);
//     task.appendChild(taskText);
//     task.appendChild(removeIcon);
//     taskContainer.appendChild(task);

// inputEl.value = ""

// })

addBtn.addEventListener("click" ,(e)=>{
    e.stopPropagation()
    
    const task = document.createElement("div");
    const taskText = document.createElement("h4")
    const checkIcon = document.createElement("i")
    const removeIcon = document.createElement("i")

    task.className = "task"
    checkIcon.className = "ri-checkbox-blank-circle-line"
    removeIcon.className = "ri-close-large-fill"
    taskText.textContent = inputEl.value;

    task.appendChild(checkIcon);
    task.appendChild(taskText);
    task.appendChild(removeIcon);
    taskContainer.appendChild(task);

    task.addEventListener("click" , (e)=> {
        console.log(e.target);
        if(checkIcon.className == "ri-checkbox-blank-circle-line") {
            checkIcon.className = "ri-checkbox-circle-line"
        } else {
            checkIcon.className = "ri-checkbox-blank-circle-line"
        }
    })

    removeIcon.addEventListener("click" , (e)=> {
        e.stopPropagation()
        e.target.parentElement.remove()
        
    })
    inputEl.value = ""

})
//
